import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';

test.describe('OrangeHRM Automation Test', () => {

    test('Login and PIM Employee Validation', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        try {
            // Navigate and Login
            await loginPage.navigate();
            await loginPage.login('Admin', 'admin123');

            // Wait for Dashboard
            await dashboardPage.waitForDashboard();

            // Take screenshot after login
            await page.screenshot({
                path: 'screenshots/dashboard_after_login.png',
                fullPage: true
            });

            // Validate Dashboard Elements
            await dashboardPage.validateDashboardElements();

            // Navigate to PIM Module
            await dashboardPage.navigateToPIM();            

            // Extract First 5 Employees
            const names = await dashboardPage.getFirstNEmployeeNames(5);

            // Validate Names are not empty
            names.forEach((name, index) => {
                expect(name).not.toBe('');
            });

            // ✅ Validate at least one Full-Time Permanent employee exists in the whole list
            const hasFullTime = await dashboardPage.hasFullTimePermanentEmployee();
            expect(hasFullTime).toBeTruthy();

            // Take screenshot for PIM Module
            await page.screenshot({
                path: 'screenshots/pim_module.png',
                fullPage: true
            });

        } catch (error) {
            console.log('Test failed:', error);
            await page.screenshot({
                path: 'screenshots/failure.png',
                fullPage: true
            });
            throw error;
        } finally {
            await page.close();
        }
    });
});
