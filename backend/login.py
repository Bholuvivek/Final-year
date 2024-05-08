import random
from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:5173"]}})

otp_cache = {}  # Cache to store OTPs temporarily

@app.route('/api/send-otp', methods=['POST','GET'])
def send_otp():
    data = request.json
    mobile_number = data.get('mobileNumber')
    if not mobile_number:
        return jsonify({'error': 'Mobile number is required'}), 400

    # Generate OTP
    otp = str(random.randint(1000, 9999))

    # Cache OTP with mobile number
    otp_cache[mobile_number] = otp

    # Here, you would implement the logic to send the OTP to the user's mobile number via SMS
    # For now, we'll just print the OTP
    print("OTP for", mobile_number, ":", otp)

    return jsonify({'message': 'OTP sent to ' + mobile_number}), 200

@app.route('/api/verify-otp', methods=['POST','GET'])
def verify_otp():
    data = request.json
    mobile_number = data.get('mobileNumber')
    otp = data.get('otp')
    if not mobile_number or not otp:
        return jsonify({'error': 'Mobile number and OTP are required'}), 400

    # Check if OTP exists in cache
    if otp_cache.get(mobile_number) == otp:
        # Clear OTP from cache after successful verification
        del otp_cache[mobile_number]
        return jsonify({'message': 'OTP verified successfully'}), 200
    else:
        return jsonify({'error': 'Invalid OTP'}), 400

if __name__ == '__main__':
    app.run(debug=True)
