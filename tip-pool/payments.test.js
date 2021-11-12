describe("Payments test (with setup and tear-down)", function() {
    beforeAll(function () {
      // initialization logic
      billAmtInput.value = '168.28';
      tipAmtInput.value = '28';
      submitPaymentInfo();
      billAmtInput.value = '124.28';
      tipAmtInput.value = '26';
      submitPaymentInfo();
    });
  
    it('should give payment breakdown', function () {
    //   submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(paymentId);
      expect(allPayments.payment1.tipPercent).toEqual(17);
      expect(allPayments.payment2.tipPercent).toEqual(21);
      expect(summaryTds[0].innerText).toEqual('$292.56')
      expect(summaryTds[1].innerText).toEqual('$54')
      expect(summaryTds[2].innerText).toEqual('19%')
    });
  
    it('should update payment table UI', function () {
    
      expect(document.querySelectorAll('#paymentTable td').length).toEqual(paymentId * 3);
      
    });

    it('should update summary table UI', function () {
    
      expect(document.querySelectorAll('#summaryTable td').length).toEqual(3);
      
    });
  
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
  });