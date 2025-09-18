# Manual Testing – QA Assessment

---

## Question 1: Add to Cart Functionality

### Test Scenarios

| Test Case ID | Description                   | Steps                                                | Expected Result                        |
|--------------|-------------------------------|------------------------------------------------------|----------------------------------------|
| TC-ADD-001   | Add single product to cart    | Navigate to product page → Click "Add to Cart"       | Cart counter increases by 1            |
| TC-ADD-002   | Add multiple products to cart | Add 3 different products                             | Cart counter increases accordingly (3) |
| TC-ADD-003   | Add same product twice        | Click "Add to Cart" button of same product 2 times   | Cart counter should show 2             |
| TC-ADD-004   | Remove product after adding   | Add product → Remove from cart                       | Cart counter decreases correctly       |
| TC-ADD-005   | Page refresh after adding     | Add product → Refresh page                           | Cart counter still shows updated value |

---

### Bug Report

- **Title:** Cart counter not updating after adding product  
- **Steps to Reproduce:**  
  1. Go to product listing page  
  2. Click "Add to Cart" on any product  
- **Expected Result:** Cart counter should increase by 1  
- **Actual Result:** Cart counter remains unchanged  
- **Severity:** High  
- **Priority:** Immediate  

---

### Additional Questions

- **Q3: How would you test if the cart counter is syncing correctly across different pages?**  
  - **Answer:**  
    - I will add products from the listing page, then navigate to product details, cart page, and checkout page.  
    - I will verify that the cart counter shows the same value everywhere.  
    - I will also check local storage/session storage to confirm the value is persisting across pages.  

- **Q4: What API or network validations would you do in this scenario?**  
  - **Answer:**  
    - I will check that the `POST /cart/add` API is called with the correct product ID when I click "Add to Cart".  
    - I will verify the response status code is `200 OK`.  
    - I will confirm that the response payload contains the updated cart count.  
    - I will also validate that `GET /cart` returns the correct number of items after adding.  

- **Q5: If the cart works in staging but fails in production, how would you approach debugging?**  
  - **Answer:**  
    - I will compare the API endpoints and environment configurations between staging and production.  
    - I will check the browser console for errors such as CORS or server errors.  
    - I will use DevTools to inspect network requests and confirm whether the API calls are failing.  
    - I will review backend logs for production-specific issues.  
    - I will validate environment variables and ensure deployment settings are correct.  

---

## Question 2: Login Page with Broken "Forgot Password" Link

### Test Scenarios

| Test Case ID | Description                  | Steps                                              | Expected Result                        |
|--------------|------------------------------|----------------------------------------------------|----------------------------------------|
| TC-LOGIN-001 | Valid login                  | Enter valid email + valid password → Click login   | Redirect to dashboard                   |
| TC-LOGIN-002 | Invalid email                | Enter invalid email + valid password → Click login | Error message shown                     |
| TC-LOGIN-003 | Invalid password             | Enter valid email + wrong password → Click login   | Error message shown                     |
| TC-LOGIN-004 | Blank fields                 | Leave both fields empty → Click login              | Validation error shown                  |
| TC-LOGIN-005 | Forgot password functionality| Click "Forgot Password" link                       | Password reset page should open         |

---

### Bug Report

- **Title:** "Forgot Password" link not working  
- **Steps to Reproduce:**  
  1. Navigate to login page  
  2. Click on "Forgot Password" link  
- **Expected Result:** User is redirected to password reset page  
- **Actual Result:** Link is broken (no redirection / 404 error)  
- **Severity:** Medium  
- **Priority:** High  

---

### Impact Analysis

- **Question:** What is the impact if this issue is found in production?  
- **Answer:**  
  - Users who forgot their password will be blocked from logging in.  
  - This will frustrate users and create a poor experience.  
  - It will increase the number of support tickets.  
  - It can cause loss of active users and reduce trust in the system.  
  - Since login is critical, I will treat this issue as urgent and high-priority for fix.  

---
