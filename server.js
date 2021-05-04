const express = require("express");
const next = require("next");
const path = require("path");
const axios = require("axios");
const crypto = require("crypto");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

function getHash(string) {
  let hash = crypto.createHash("sha1");
  hash.update(string);
  return hash.digest("base64");
}

app.prepare().then(() => {
  const server = express();

  server.post("/api/pay", function (req, res) {
    const {
      cardNumber,
      cardName,
      CVV,
      cardExpireDateMonth,
      cardExpireDateYear,
      cardType,
      // amount,
    } = req.body;
    console.log({
      cardName,
      cardNumber,
      CVV,
      cardExpireDateMonth,
      cardExpireDateYear,
      cardType,
      // amount,
    });
    const amount = 5;
    const customerId = 97138822;
    const merchantId = 55538;
    const userName = "OUBAY";
    const password = "147258";
    const hashedPassword = getHash(password);
    const okUrl = "http://localhost:3000/privacy";
    const failUrl = "http://localhost:3000/terms";
    const merchantOrderId = "Siparis_161253";
    const hashString =
      "" +
      merchantId +
      merchantOrderId +
      amount +
      okUrl +
      failUrl +
      userName +
      hashedPassword;
    const hashData = getHash(hashString);

    const xmlBodyStr = `<KuveytTurkVPosMessage xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <APIVersion>1.0.0</APIVersion>
    <OkUrl>${okUrl}</OkUrl>
    <FailUrl>${failUrl}</FailUrl>
    <HashData>${hashData}</HashData>
    <MerchantId>${merchantId}</MerchantId>
    <CustomerId>${customerId}</CustomerId>
    <UserName>${userName}</UserName>
    <CardNumber>${cardNumber}</CardNumber>
    <CardExpireDateYear>${cardExpireDateYear}</CardExpireDateYear>
    <CardExpireDateMonth>${cardExpireDateMonth}</CardExpireDateMonth>
    <CardCVV2>${CVV}</CardCVV2>
    <CardHolderName>${cardName}</CardHolderName>
    <CardType>${cardType}</CardType>
    <BatchID>0</BatchID>
    <TransactionType>Sale</TransactionType>
    <InstallmentCount>0</InstallmentCount>
    <Amount>${amount}</Amount>
    <DisplayAmount>${amount}</DisplayAmount>
    <CurrencyCode>0949</CurrencyCode>
    <MerchantOrderId>${merchantOrderId}</MerchantOrderId>
    <TransactionSecurity>3</TransactionSecurity>
    </KuveytTurkVPosMessage>`;
    let config = {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Content-length": xmlBodyStr.length,
      },
    };
    axios
      .post(
        "https://boa.kuveytturk.com.tr/sanalposservice/Home/ThreeDModelPayGate",
        xmlBodyStr,
        config
      )
      .then((result) => {
        res.write(result.data);
        res.end();
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
    // res.setHeader("Content-Type", "text/html");

    res.end();
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
