import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly dashboardHeader: Locator;
    readonly adminTab: Locator;
    readonly pimTab: Locator;
    readonly profileName: Locator;
    readonly employeeRows: Locator;
    readonly employeeStatuses: Locator;
    readonly nextPageButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeader = page.locator('h6:has-text("Dashboard")');
        this.adminTab = page.locator('a[href*="admin/viewAdminModule"]');
        this.pimTab = page.locator('a[href*="pim/viewPimModule"]');
        this.profileName = page.locator('p.oxd-userdropdown-name');
        this.employeeRows = page.locator('div.oxd-table-body > div.oxd-table-card');

        this.employeeStatuses = page.locator('.oxd-table-cell:nth-child(6)');
        this.nextPageButton = page.locator('button.oxd-pagination-page-item--previous-next');
    }

    async waitForDashboard() {
        await this.dashboardHeader.waitFor({ state: 'visible', timeout: 10000 });
    }

    async validateDashboardElements() {
        await expect(this.dashboardHeader).toBeVisible();
        await expect(this.adminTab).toBeVisible();
        await expect(this.pimTab).toBeVisible();
        await expect(this.profileName).toBeVisible();
    }

    async navigateToPIM() {
        await this.pimTab.click();
    }

    // // ✅ Extract only first 5 employee names
    // async getFirstFiveEmployeeNames() {
    //     await this.employeeRows.first().waitFor({ state: 'visible', timeout: 5000 });

    //     const names: string[] = [];
    //     const rowsCount = await this.employeeRows.count();

    //     for (let i = 0; i < Math.min(5, rowsCount); i++) {
    //         const row = this.employeeRows.nth(i);
    //         const name = await row.locator('div.oxd-table-cell:nth-child(3)').textContent();
    //         if (name) names.push(name.trim());
    //     }

    //     return names;
    // }

    /**
   * Extract first N employee names from the current table page
   */
  async getFirstNEmployeeNames(n: number = 5): Promise<string[]> {
    const employeeNameLocator = this.page.locator('.oxd-table-cell:nth-child(3)'); // adjust if needed
    const names = await employeeNameLocator.allTextContents();
    return names.slice(0, n);
  }

    /**
   * Pagination-safe check to verify at least one Full-Time Permanent employee exists
   */
    async hasFullTimePermanentEmployee(): Promise<boolean> {
        let hasFullTime = false;

        do {
            const statuses = await this.employeeStatuses.allTextContents();
            if (statuses.includes('Full-Time Permanent')) {
                hasFullTime = true;
                break;
            }

            if (await this.nextPageButton.isEnabled()) {
                await this.nextPageButton.click();
                await this.page.waitForTimeout(500); // Wait for table to refresh
            } else {
                break;
            }
        } while (true);

        return hasFullTime;
    }
}
