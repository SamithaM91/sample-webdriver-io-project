🔍 WebdriverIO: Automating 🚀

When it comes to automating web forms, both Selenium and WebdriverIO are popular choices.
Let’s see how  WebdriverIO tackle common tasks such as locators, annotations, and TestNG integration. Ex site: LeafGround 

1.	Locators
    WebdriverIO (JavaScript + Mocha):
    WebdriverIO provides a simpler, promise-based API for element interaction, making it more concise.
  
2.	Test Annotations and Execution
    WebdriverIO with Mocha (JavaScript):
    In WebdriverIO, the before() and after() hooks can be used similarly for setup and teardown:
    
3.	Handling Input Fields and Assertions
    WebdriverIO (JavaScript + Mocha):
    In WebdriverIO, you can perform similar assertions using Chai:
   
     Why WebdriverIO Over Selenium?
  	
    •	Cleaner Syntax: WebdriverIO’s promise-based API makes your tests easier to read and write.
  	
    •	Built-In Features: Automatic waits, hooks, and integrations (like Chai) make WebdriverIO a more modern choice.
  	
    •	JavaScript Native: Perfect for modern web apps built on JavaScript/TypeScript.
  	
    •	Test Execution & Reporting: WebdriverIO integrates effortlessly with tools like Mocha, Chai, and Allure.
  	
If you're moving to JavaScript or want simpler and more efficient automation, WebdriverIO is the way to go! 🚀

             npm init wdio webdriver-io-leafground-sample-project
             Go through the project set up questions
             npm install
             cd webdriver-io-leafground-sample-project
             npm run wdio
