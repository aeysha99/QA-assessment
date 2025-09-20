
# QA-Assessment  

This repository contains my **QA assessment** for the permanent position at **Selise**.  
It covers **manual testing, automation, API testing, load testing, and coding tasks**.  

---
 


## 📝 Summary of Completed Tasks  

###  Manual Testing  

- **Login Page Testing:**  
  - Valid and invalid login scenarios tested  
  - Mandatory fields and "Remember Me" checkbox validated  
  - Broken **"Forgot Password"** link reported as a bug  
  - Impact analysis performed if issue occurs in production  

- **Product Listing / Add to Cart Testing:**  
  - "Add to Cart" functionality verified for single and multiple items  
  - Cart counter persistence across pages validated  
  - Edge cases tested (adding same product multiple times, removing items)  
  - Bug reported for cart counter not updating after adding items  
  - Network/API request validations considered for cart updates  

---

### Automation Testing  

- Built with **Playwright + TypeScript**  
- Follows **Page Object Model (POM)** design pattern  
- Covers login, dashboard validation, PIM module employee checks  
- Uses **explicit waits, screenshots, videos, and traces**  

## **How to Run Automation**

Before running the automation, please make sure the following are installed:

- **Node.js** (v18 or higher)  
  - If Node.js is not installed, download and install it from [https://nodejs.org/](https://nodejs.org/)  
- **npm** (comes bundled with Node.js)  

**Steps to Run:**

 Open terminal and clone the repository:  

```bash
git clone <repo-url>
cd QA-assessment/automation-orangehrm
npm install
npx playwright install
npx playwright test
```

### Analytical / Reasoning

- Number series, odd-one-out, distance & direction problems  
- Logical conclusions based on statements  
- Demonstrated reasoning and problem-solving skills  

---

### Postman / API Assessment  

- Base URL: `https://library-api.postmanlabs.com`  
- Created, updated, and deleted book via API  
- Assertions on status codes and response body  
- Organized requests in Postman collection  

###  Coding Assessment

- Python programs completed:  
  1. Check if a number is **even or odd**  
  2. Check if a number is **prime**  
  3. Find **maximum number** in an array  
- Verified with multiple test inputs.


### ✅ Submission Notes  

- All code, Postman collection, and analytical solutions are included in this repository.  
- Automation video demonstrating the UI test is available in the `automation/video/` folder.  
- The repository can be accessed publicly for evaluation.  

  


