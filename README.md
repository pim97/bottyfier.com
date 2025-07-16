# Bottyfier API

**Developer-first, API-based bot detection and prevention. Stop bots before signup, prevent fake users, and protect your SaaS with no-captcha, automatic bot filtering.**

[![API Status](https://img.shields.io/badge/status-live-brightgreen)](https://bottyfier.com)

---

## 🚀 What is Bottyfier?

**Bottyfier** is a powerful, developer-first anti-bot API designed to help you:
- **Stop bots before signup**
- **Prevent fake signups and fake users**
- **Detect disposable emails and suspicious IPs**
- **Block VPNs, proxies, and automated scraping**
- **Filter bots without annoying CAPTCHAs**
- **Leverage browser fingerprinting for advanced detection**

Whether you’re building a SaaS, e-commerce, or any web platform, Bottyfier offers seamless, API-based bot protection that’s easy to integrate and scales with your needs.

---

## 🏷️ Keywords

`bot detection API`, `stop bots before signup`, `automatic bot protection`, `developer-first anti-bot`, `no captcha bot filtering`, `API based bot detection`, `prevent fake signups`, `fake user prevention`, `disposable email detection`, `suspicious IP filtering`, `VPN proxy detection`, `browser fingerprinting API`, `automated scraping protection`, `SaaS bot prevention`

---

## 💡 Features

- **No-CAPTCHA Bot Filtering:** Frictionless for real users, tough on bots.
- **Disposable Email Detection:** Block throwaway and temporary emails.
- **Suspicious IP & VPN/Proxy Detection:** Instantly filter risky signups.
- **Browser Fingerprinting API:** Identify bots and automation tools.
- **Automated Scraping Protection:** Keep your data safe from scrapers.
- **Easy API Integration:** Built for developers, with clear docs and SDKs.
- **Geographic Intelligence:** Get detailed IP geolocation data including country, region, ISP, and organization.
- **AI Bot Detection:** Invisible behavioral analysis that stops bots while real users pass through seamlessly.

---

## 🛠️ Getting Started

### 1. **Sign Up & Get Your API Key**
- Visit [bottyfier.com](https://bottyfier.com) to create an account.
- Choose a plan (see [Pricing](https://bottyfier.com/pricing)).
- Copy your API key from the dashboard.


## 🔐 Authentication

All API requests require authentication using your API key. Include it as a query parameter.

**Format:**

```
https://api.bottyfier.com/ip/8.8.8.8?key=YOUR_API_KEY
```

> **Keep your API key secure:** Never expose your API key in client-side code. Use it only in server-side applications.

---

## 📚 API Reference

See [`docs/API_REFERENCE.md`](docs/API_REFERENCE.md) for full endpoint documentation, parameters, and response examples.

---

## 🧑‍💻 Examples

- [Quickstart Node.js](examples/quickstart.js)
- [Live Demo](https://bottyfier.com/demo)

---

## 🛡️ API Endpoints

### GET `/ip/{ip}` — IP Validation
Validate an IP address for VPN usage, datacenter detection, and blacklist status.

**Request:**
```
curl "https://api.bottyfier.com/ip/8.8.8.8?key=YOUR_API_KEY"
```

**Response:**
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

### GET `/email/{email}` — Email Validation
Check if an email address is valid, disposable, or from a temporary email service.

**Request:**
```
curl "https://api.bottyfier.com/email/user@example.com?key=YOUR_API_KEY"
```

### GET `/validate/{ip}/{email}` — Combined Validation
Validate both IP address and email in a single request for comprehensive protection.

**Request:**
```
curl "https://api.bottyfier.com/validate/8.8.8.8/user@example.com?key=YOUR_API_KEY"
```

---

## ❗ Error Handling

The API returns standard HTTP status codes along with detailed error messages.

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

## 💸 Pricing & Terms

- **Free Tier:** 100k requests/month free. No credit card required. Cancel anytime.
- **Pro Plan:** $29/month for 5M requests, priority support, advanced analytics.
- [Pricing](https://bottyfier.com/pricing)
- [Terms of Service](https://bottyfier.com/terms)
- [Privacy Policy](https://bottyfier.com/privacy)

---

## 📢 Why Bottyfier?

- **SaaS bot prevention** made simple
- **No-captcha** user experience
- **API-based** for easy integration
- **Automatic bot protection** for your business
- **Invisible to Humans:** AI detects bot patterns while humans barely notice
- **Zero User Friction:** Real users pass through instantly - no interruptions
- **Instant Protection:** Bots are blocked before they can harm your app

---

## 🤝 Support

- [Contact Us](https://bottyfier.com/contact)
- Email: support@bottyfier.com

---

## 🏷️ Tags

`bot detection`, `anti-bot`, `API`, `SaaS`, `fake signup prevention`, `browser fingerprinting`, `VPN detection`, `proxy detection`, `disposable email`, `scraping protection`, `developer tools` 