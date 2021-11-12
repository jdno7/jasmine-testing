describe("Helpers test (using payments and servers test setup and tear-down)", function() {

   
        beforeAll(function () {
          // initialization logic
          billAmtInput.value = '168.28';
          tipAmtInput.value = '28';
          submitPaymentInfo();
          billAmtInput.value = '124.28';
          tipAmtInput.value = '26';
          submitPaymentInfo();
        });

    it ('should give proper totals sumPaymentTotals()', function (){
        expect(sumPaymentTotal('billAmt')).toEqual(292.56);
        expect(sumPaymentTotal('tipAmt')).toEqual(54);
        expect(sumPaymentTotal('tipPercent')).toEqual(38);
        // expect(summaryTds[1]).toEqual('$54')
        // expect(summaryTds[0]).toEqual('19%')
    })

    it('should calculate tip percent', function(){
        expect(calculateTipPercent(286, 45)).toEqual(16);
    })

    afterAll(function() {
        // let servers = document.querySelectorAll('#serverTable tr')
    
        // for(let ser of servers){
        //   if (ser.id !== ''){
        //     ser.remove();
        //   }
        // } 
        // allServers = {};
        // serverId = 0;
        let payments = document.querySelectorAll('#paymentTable tr');
    
        for(let p of payments){
          if (p.id !== ''){
            p.remove();
          }
        }
        let sumTds = document.querySelectorAll('#summaryTable td');
          sumTds.forEach (td => td.remove())
          allPayments = {};
          paymentId = 0;
      });
})