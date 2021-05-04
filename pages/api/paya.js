const axios = require("axios");
const crypto = require("crypto");

function getHash(string) {
  let hash = crypto.createHash("sha1");
  hash.update(string);
  return hash.digest("base64");
}

export default function helloAPI(req, res) {
  if (req.method === "POST") {
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

    // const cardNumber = "#4025903160410013#";
    // const CVV = "123";
    // const cardExpireDateMonth = "07";
    // const cardExpireDateYear = "20";
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
    // axios
    //   .post(
    //     "https://boatest.kuveytturk.com.tr/boa.virtualpos.services/Home/ThreeDModelPayGate",
    //     xmlBodyStr,
    //     config
    //   )
    //   .then((res) => {
    //     console.log("success");
    //     console.log(res);
    //     res.send(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //     console.log(err);
    //   });
    const html = `<!DOCTYPE html>
    <html>
    <head runat="server">
        <title></title>
    </head>
    <body onload="OnLoadEvent();">
        <form name="downloadForm"
            action="https://goguvenliodeme.bkm.com.tr/troy/approve"
            method="POST">
            <input type="hidden"
                name="goreq"
                value="eyJleHBpcnkiOiIyNTA2IiwiZ29TdGFtcCI6ImV5SmhiR2NpT2lKSVV6VXhNaUo5LmV5SnpkV0lpT2lJd01EQXdNREF3TURBd05UVTFNemdpTENKMGFXMWxiM1YwVTJWamIyNWtjeUk2TkRNeU1EQXdNREFzSW5KdmJHVnpJam9pSWl3aVpYaHdJam94TmpZek16TTNNamd5ZlEubDdVS0pkcmkzUWtCcU0xREZZNUxBRkJBSEpsSTROUXZnUWlPWUhpbWEzTTRkQU9fV2Jfdm9KMERJTFI3cGx3OE9YYzRSNkRHMlQwX3M0S21teG5YWVEiLCJpZCI6IjAyMDU3OWVmNmRlOS0yOTYxLTRjOGMtYWI3YS1mZGZmZWJlNWI0YzYiLCJtYWMiOiJReEFtVk9XUStUc1lwaXhYMVwvS3FNTjRcL2lUdVJ3VU5TNElFNG0yaG1PWldyaG5vNDF4aHNacEN5dDI5U25sckxFYUFRUmpPSDhvXC8rN2NxdGRES2lDYXZZYjZhclB0V282YlM2MkJRWld4Zk1aMmxBckxYN0pYSWxvejNaNWVOKytqTHZxOHV0MGtza0Q5UUhoTVFpMkg5OEY0SUIxdVBLenI0Zlc3cXJxcFk3Rms1OFN1VFhQcEhqVVhOV1VMOUF5b0ZIdlJvMVwvbHV5dGRHNmg2WjhrYUFGYkxTVHZjZ1VpM2FqSDBDMm1EWVVKeDZsdVRoSXhac2dEY3drRTFTRWU5XC9UaWNTU2NDMisrSjZzc2RkQlJXK3NIYlpBR1pTcmkxVDBzTGVYbXVUa09iWktmVHA0RGRPSTdiaTVHWUxXckY1QUtQWndOV3dUNGxIZ0w5NDc4Zz09IiwidGltZSI6IjIwMjEwNTA0MTcwODAyIiwidmVyc2lvbiI6IjAuMDMifQ==">
            <!-- To support javascript unaware/disabled browsers -->
            <noscript>
        <center>Please click the submit button below.<br>
        <input type="submit" name="submit" value="Submit"></center>
      </noscript>
        </form>

        <script language="Javascript">                
        function OnLoadEvent() {
            document.downloadForm.submit();
        }
        </script>
    </body>
    </html>`;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
    // res.send(html);
  }
}
