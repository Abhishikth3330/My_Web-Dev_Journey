import time
import hmac
import hashlib
import struct
import base64

def generate_totp(email, secret_suffix, time_step=30):
    # Create the shared secret
    secret = (email + secret_suffix).encode()

    # Get the current timestamp and calculate the time counter
    timestamp = int(time.time())
    counter = int(timestamp / time_step)

    # Pack the counter into an 8-byte structure
    counter_bytes = struct.pack(">Q", counter)

    # Create HMAC-SHA512 hash
    hmac_hash = hmac.new(secret, counter_bytes, hashlib.sha512).digest()

    # Extract a dynamic binary code from the hash
    offset = hmac_hash[-1] & 0x0F
    binary_code = struct.unpack(">I", hmac_hash[offset:offset + 4])[0] & 0x7FFFFFFF

    # Get the TOTP value (last 10 digits of the binary code)
    return str(binary_code)[-10:]

# Example to generate TOTP
# Replace YOUR_EMAIL with your email address
email = "abhishikththul9@gmail.com"
totp = generate_totp(email, "HENNGECHALLENGE003")
print(f"TOTP: {totp}")
