import requests
import base64
from generate_totp import generate_totp  # Import generate_totp function

def send_solution(github_url, email):
    # Generate the TOTP dynamically
    totp = generate_totp(email, "HENNGECHALLENGE003")
    
    url = "https://api.challenge.hennge.com/challenges/003"

    # Prepare JSON payload
    payload = {
        "github_url": github_url,
        "contact_email": email,
        "solution_language": "python"
    }

    # Encode email and TOTP as HTTP Basic Authentication
    auth_string = f"{email}:{totp}"
    auth_header = base64.b64encode(auth_string.encode()).decode()

    # Set headers
    headers = {
        "Authorization": f"Basic {auth_header}",
        "Content-Type": "application/json"
    }

    # Send POST request
    response = requests.post(url, json=payload, headers=headers)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")

# Replace with your actual data
github_url = "https://gist.github.com/Abhishikth3330/602ff17f75d8fa6f7a03aa89d196a3bb"
email = "abhishikththul9@gmail.com"

send_solution(github_url, email)

# TOTP: 2070915805
# Status Code: 200
# Response: {"message":"Congratulations! You have achieved mission 3"}