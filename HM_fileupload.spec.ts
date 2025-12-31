import test from '@playwright/test'
// load url : https://login.salesforce.com/?locale=in
// username : dilipkumar.rajendran@testleaf.com
// password : TestLeaf@2025
// click on login button
test("File Upload",async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@type='email']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@type='password']").fill("TestLeaf@2025")
    await page.click("//input[@type='submit']")
    await page.waitForTimeout(2000)
    await page.click("div[class^='slds-icon']")
    const value =  page.getByPlaceholder("Search apps and items...")
    await value.fill("Accounts")
    await value.press("Enter")
    await page.locator("//p[@class='slds-truncate']").click()
    //await page.waitForTimeout(5000)
    await page.locator("//div[@title='New']").click()
    await page.waitForTimeout(5000)
    await page.locator("//input[@name='Name']").fill("TestLeaf")
    await page.waitForTimeout(5000)
    //await page.locator("//button[@data-value='--None--']")
    //await page.locator("//button[@data-value='Prospect']").click()
    await page.getByRole('combobox', { name: 'Type' }).click();
    await page.getByRole('option', { name: 'Prospect' }).click()
    await page.getByRole('combobox', { name: 'Industry' }).click();
    await page.getByRole('option', { name: 'Banking' }).click()
    await page.waitForTimeout(1000)
    //await page.locator(".SaveEdit").click()
    await page.getByRole('button', { name: 'Save', exact: true }).click();
   // await page.waitForTimeout(2000)
    await page.getByRole('link', { name: 'TestLeaf' }).click();
    
    await page.waitForTimeout(1000)
    const filechooser=page.waitForEvent('filechooser')
    await page.getByRole('button', { name: 'Upload Files',exact:true }).click();
    const res=await filechooser
    await res.setFiles("D:/Vijay/Test_Leaf/Playwright/Playwright_Workspace/Data/XPath_Cheat_Sheet.pdf")
   // await page.waitForTimeout(5000)
    await page.getByRole('button', { name: 'Done',exact:true }).click();

})