# Bottyfier API Reference

## Authentication

All requests require your API key. Pass it as a query parameter (`?key=YOUR_API_KEY`) or in the `Authorization: Bearer YOUR_API_KEY` header.

---

## Endpoints

### 1. IP Protection

#### GET `/ip/{ip}`
Validate an IP address for VPN usage, datacenter detection, blacklist status, and geolocation.

**Request Example:**
```
curl "https://api.bottyfier.com/ip/8.8.8.8?key=YOUR_API_KEY"
```

**Response Example:**
```json
{
  "ip": "8.8.8.8",
  "isVpn": false,
  "isDatacenter": false,
  "isBlacklisted": false,
  "ipApiData": {
    "status": "success",
    "country": "United States",
    "countryCode": "US",
    "region": "VA",
    "regionName": "Virginia",
    "city": "Ashburn",
    "zip": "20149",
    "lat": 39.03,
    "lon": -77.5,
    "timezone": "America/New_York",
    "isp": "Google LLC",
    "org": "Google Public DNS",
    "as": "AS15169 Google LLC",
    "query": "8.8.8.8"
  },
  "lastBlacklistUpdate": null
}
```

---

### 2. Email Validation

#### GET `/email/{email}`
Check if an email address is valid, disposable, or from a temporary email service.

**Request Example:**
```
curl "https://api.bottyfier.com/email/user@example.com?key=YOUR_API_KEY"
```

**Response Example:**
```json
{
  "email": "user@example.com",
  "isDisposable": false,
  "isBlacklisted": false,
  "mxValid": true,
  "domain": "example.com"
}
```

---

### 3. Combined Validation

#### GET `/validate/{ip}/{email}`
Validate both IP address and email in a single request for comprehensive protection.

**Request Example:**
```
curl "https://api.bottyfier.com/validate/8.8.8.8/user@example.com?key=YOUR_API_KEY"
```

**Response Example:**
```json
{
  "ip": "8.8.8.8",
  "isVpn": false,
  "isDatacenter": false,
  "isBlacklisted": false,
  "email": "user@example.com",
  "isDisposable": false,
  "isBlacklistedEmail": false,
  "mxValid": true,
  "domain": "example.com"
}
```

---

## Error Handling

The API returns standard HTTP status codes and error messages.

- **400 Bad Request**
  ```json
  { "error": "Invalid IP address format", "ip": "invalid-ip" }
  ```
- **401 Unauthorized**
  ```json
  { "error": "Invalid API key", "message": "Please check your API key and try again" }
  ```
- **429 Rate Limited**
  ```json
  { "error": "Rate limit exceeded", "message": "Please slow down your requests", "retry_after": 60 }
  ```

---

## Code Examples

### Node.js
```js
const axios = require('axios');
const response = await axios.get('https://api.bottyfier.com/ip/8.8.8.8?key=YOUR_API_KEY');
console.log(response.data);
```

### Python
```python
import requests
response = requests.get('https://api.bottyfier.com/ip/8.8.8.8', params={'key': 'YOUR_API_KEY'})
print(response.json())
```

### PHP
```php
<?php
$response = file_get_contents('https://api.bottyfier.com/ip/8.8.8.8?key=YOUR_API_KEY');
echo $response;
?>
```

### Go
```go
resp, err := http.Get("https://api.bottyfier.com/ip/8.8.8.8?key=YOUR_API_KEY")
// handle response
```

---

## FAQ & Support

- [Contact Support](https://bottyfier.com/contact)
- [Live Demo](https://bottyfier.com/demo)
- [Pricing](https://bottyfier.com/pricing) 