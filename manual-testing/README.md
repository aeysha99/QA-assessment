# Manual Testing – QA Assessment

---

## Question 1: Add to Cart Functionality

### Test Scenarios

| Test Case ID | Description                            | Steps                                                                 | Expected Result                                |
|--------------|----------------------------------------|----------------------------------------------------------------------|------------------------------------------------|
| TC-ADD-001   | Add single product to cart             | Navigate to product page → Click "Add to Cart" on 1 product          | Cart counter increases by 1                    |
| TC-ADD-002   | Add multiple products to cart          | Add 3 different products                                             | Cart counter increases accordingly (3)         |
| TC-ADD-003   | Add same product multiple times        | Click "Add to Cart" button of same product 2 times                   | Cart counter should show 2                     |
| TC-ADD-004   | Remove product after adding            | Add product → Remove from cart                                       | Cart counter decreases correctly               |
| TC-ADD-005   | Page refresh after adding              | Add product → Refresh page                                           | Cart counter still shows updated value         |

---

### Bug Report

**Title:** Cart counter not updating after adding product  
**Steps to Reproduce:**
1. Go to product listing page  
2. Click "Add to Cart" on any product  

**Expected Result:** Cart counter should increase by 1  
**Actual Result:** Cart counter remains unchanged  

**Severity:** High  
**Priority:** Immediate  

---

### Additional Questions

**Q3: How to test if cart counter is syncing across pages?**  
- Add product in listing page → Navigate to product details page → Navigate to cart page  
- Ensure the counter value is consistent everywhere  
- Use session storage/local storage validation  

**Q4: API / Network Validations**  
- Verify `POST /cart/add` API request is triggered with correct product ID  
- Validate response status code `200`  
- Confirm response payload updates cart count  
- Check if `GET /cart` API reflects updated items  

**Q5: Debugging if works in staging but fails in production**  
- Compare API endpoints between staging & production  
- Check environment-specific configurations (e.g., base URLs)  
- Review browser console for errors (CORS, 500 errors)  
- Inspect network requests for failures  
- Check production logs for backend errors  

---

## Question 2: Login Page with Broken "Forgot Password" Link

### Test Scenarios

| Test Case ID | Description                     | Steps                                                               | Expected Result                         |
|--------------|---------------------------------|---------------------------------------------------------------------|-----------------------------------------|
| TC-LOGIN-001 | Valid login                     | Enter valid email + valid password → Click login                     | Redirect to dashboard                    |
| TC-LOGIN-002 | Invalid email                   | Enter invalid email + valid password → Click login                   | Error message shown                      |
| TC-LOGIN-003 | Invalid password                | Enter valid email + wrong password → Click login                     | Error message shown                      |
| TC-LOGIN-004 | Blank fields                    | Keep email + password empty → Click login                            | Validation error shown                   |
| TC-LOGIN-005 | Forgot password functionality   | Click "Forgot Password" link                                         | Password reset page should open          |

---

### Bug Report

**Title:** "Forgot Password" link not working  
**Steps to Reproduce:**
1. Navigate to login page  
2. Click on "Forgot Password" link  

**Expected Result:** User is redirected to password reset page  
**Actual Result:** Link is broken (no redirection / 404 error)  

**Severity:** Medium  
**Priority:** High  

---

### Impact Analysis

If this issue is found in **production**:  
- Users who forgot password cannot reset → **login failure**  
- Leads to poor user experience and support requests  
- Potential **drop in user retention** and **customer trust**  
- High-priority fix needed immediately to avoid revenue loss  

---
