# Mandla SMS Wallet Admin


<hr>


This documentation describes detailed information on how the Mandla Wallet can be used by an admin user. It gives clear instructions on how to use a Mandla Wallet to transfer funds, handle mandla wallet users and manage other payments. We encourage you to thoroughly explore this documentation to get a better understanding of the structure of Mandla Wallet. 

<br/>

<div style="page-break-after: always;"></div>

## User Statistics Dashboard

The Mandla wallet dahsboard is an efficient user-friendly tool designed for Mandla Wallet admins to manage the wallet.

### **General Overview** <a id="userstats_overview"></a>
  
  <br/>

  ![mw_userdashboard_1](/images_admin/mw_userdashboard_1.jpg)

  <br/>

* A drop down menu to filter specific information relevant to a Mandla Wallet

  <br/>

  ![mw_userdashboard_2](/images_admin/mw_userdashboard_2.jpg)

  <br/>


### **Mandla Wallet Transactions**

A detailed list of all transactions of a Mandla Wallet can be obtained using the "Pooled Transactions" tab - see next page.

  <br/>

  ![mw_pooledtransaction_1](/images_admin/mw_pooledtransactions_1.jpg)

  <br/>

  ![mw_pooledtransaction_2](/images_admin/mw_pooledtransactions_2.jpg)

  <br/>

  ![mw_pooledtransaction_3](/images_admin/mw_pooledtransactions_3.jpg)

  <br/>


### **Mandla Wallet Account Balances**

A detailed list of account balances of a Mandla Wallet can be obtained using the "Account Balance" tab - see next page. 

  <br/>

  ![mw_accountbalance_1](/images_admin/mw_accountbalance_1.jpg)

  <br/>

  ![mw_accountbalance_2](/images_admin/mw_accountbalance_2.jpg)

  <br/>


### **Manage Payments from External XRPL Source**

A detailed list of incoming payments from an external XRPL source can be obtained using the "XRP Transactions" tab for any Mandla ID - see next page. 

  <br/>

  ![mw_xrptransactions_1](/images_admin/mw_xrptransactions_1.jpg)

  <br/>

 ![mw_xrptransactions_2](/images_admin/mw_xrptransactions_2.jpg)

  <br/>

![mw_xrptransactions_3](/images_admin/mw_xrptransactions_3.jpg)

  <br/>

![mw_xrptransactions_4](/images_admin/mw_xrptransactions_4.jpg)

  <br/>

![mw_xrptransactions_5](/images_admin/mw_xrptransactions_5.jpg)

  <br/>

![mw_xrptransactions_6](/images_admin/mw_xrptransactions_6.jpg)

  <br/>



### **Manage SMSs Sent by Mandla Wallet Users**

A detailed list on the state of SMSs sent from a Mandla Wallet to the users can be obtained using the "SMS State" tab. 

  <br/>

  ![mw_sms_1](/images_admin/mw_sms_1.jpg)

  <br/>

  ![mw_sms_2](/images_admin/mw_sms_2.jpg)

  <br/>

  <div style="page-break-after: always;"></div>

 ## XRPL Operations Dashboard

 ### **General Overview**  <a id="xrpl_overview"></a>

 An overview of the XRPL Operations Dashboard. Select the Testnet option to test the dashboard.

 ![mw_opdashboard_general](/images_admin/mw_opdashboard_general.jpg)

 <br/>

 ### **Generating a Wallet**

 Select the "Create Wallet" tab to create a new wallet. A wallet is generated with the necessary details. 

 ![mw_createwallet_1](/images_admin/mw_createwallet_1.jpg)

 <br/>


 ### **Issue Digital Token (Stablecoin)**

 Select the "Issue Stablecoin" tab to issue a digital token - see next page.  

 ![mw_issuestablecoin_1](/images_admin/mw_issuestablecoin_1.jpg)

 <br/>

 ![mw_issuestablecoin_2](/images_admin/mw_issuestablecoin_2.jpg)

 <br/>

  ### **Establishing a Trustline**

 Select the "Set Trustline to Gateway" to establish a trust line between the accounts involved in the transfer. Set an account limit for the transfer - see next page.  

![mw_trustline_1](/images_admin/mw_trustline_1.jpg)

 <br/>

![mw_trustline_2](/images_admin/mw_trustline_2.jpg)

 <br/>

 ### **Make an XRP Payment**

 Select the "Make a XRP Payment" to transfer XRP between two accounts - see next page. 

 ![mw_payxrp_1](/images_admin/mw_payxrp_1.jpg)

 <br/>

 ![mw_payxrp_2](/images_admin/mw_payxrp_2.jpg)

<br/>

## **Poll Custody Account**

Select the "Poll Custody Account" tab to check for any transactions with a custody account on the XRPL. A user can set a maximum and minimum value for the ledger indices. 

![mw_pollaccount_1](/images_admin/mw_pollaccount_1.jpg)

<br/>

![mw_pollaccount_1](/images_admin/mw_pollaccount_2.jpg)

<br/>

![mw_pollaccount_1](/images_admin/mw_pollaccount_3.jpg)

<br/>

![mw_pollaccount_1](/images_admin/mw_pollaccount_4.jpg)

<br/>

![mw_pollaccount_1](/images_admin/mw_pollaccount_5.jpg)

<br/>


## **Make Payment Issued Currency**

Select the "Make Payment Issued Currency" tab to make a payment with issued currency. 

![mw_make_payment_issued_currency_1](/images_admin/mw_payment_issued_currency_1.jpg)

<br/>

![mw_make_payment_issued_currency_2](/images_admin/mw_payment_issued_currency_2.jpg)

<br/>

## **Transaction Request**

Select the "Transaction Request" tab for ??

<br/>



 <div style="page-break-after: always;"></div>


## XRPL DEX Dashboard

### **General Overview** <a id="dex_overview"></a>

The XRPL decentralized exchange (DEX) is a platform that allows users to trade digital assets in a decentralized and secure manner. The base currency on the DEX is XRP. The Mandla Money DEX integration dashboard interface allows for swapping between XRP and USDC. 

### **How to use the DEX integration interface** 

On the dashboard you will see the connected wallet and the balances it has for the different digital assets.

![DEX wallet and balances](/images_dex_integration/dex_wallet-balances.png)

The interface allows you to swap XRP for USDC and vice versa. Before you perform a swap operation you will want to assess liquidity on the DEX. The interface shows you the orders that are at the top of the order book limiting the records to 15.

![DEX order book](/images_dex_integration/dex-order-book.png)

On this interface you are able to view you trade history of all the successful trades you would have previously  made. 

![DEX trade history](/images_dex_integration/dex-trade-history.png)

To perform a trade operation you:

1. Enter the amount you want to get.
2. Select the associated currency you want.
3. Select the currency you are offering.
4. Then click the **Swap** button.

Information such as the current exchange rate for the currencies you are trading are automatically filled in for you. The exchange is pulled from the aggregated exchange rate service operated by XRP labs the creators of the XUMM wallet. The amount you are offering is automatically calculated from the amount you want and a 15% transaction fee is added on top.

![DEX swapping](/images_dex_integration/dex-swap-form.png)

## XRPL DEX Liquidity Dashboard

### **General Overview** <a id="dex_liquidity_overview"></a>

The Liquidity dashboard is a market making feature that allows one to create bids and asks on the DEX. The logic places a series of buy and sell orders at different price levels to provide liquidity for a chosen token (eg USD) in exchange for XRP. The logic calculates the ask and bid prices based on the exchange rate and percentage interval.

### **How to use the DEX Liquidity interface** <a id="dex_liquidity_interface"></a>

To place bid and ask orders enter the following information:

1. `Amount` the initial amount used to calculate the bids and asks. eg `100`
2. `Issuer Address` the token issuer address.
3.  The token.
4. `Receiver Seed` the seed of the wallet that will place orders.
5. `Steps` The number of steps or levels at which liquidity orders will be placed. Each step increases or decreases the price. eg `3`
6. `Interval` The percentage change in price between each step. `20`
7. Then click the **Create Orders** button.

![DEX Liquidity](/images_dex_liquidity/dex_liquidity.png)

 <div style="page-break-after: always;"></div>





 

 

  








