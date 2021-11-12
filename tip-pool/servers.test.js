describe("Servers test (with setup and tear-down)", function() {
  beforeAll(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    submitServerInfo();
    serverNameInput.value = 'Bubba';
    submitServerInfo();
    serverNameInput.value = 'Caitlyn';
    submitServerInfo();
    billAmtInput.value = '168.28';
    tipAmtInput.value = '28';
    submitPaymentInfo();
    billAmtInput.value = '124.28';
    tipAmtInput.value = '26';
    submitPaymentInfo();
    
   
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    // submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(serverId);
    // expect(allServers['server' + serverId].serverName).toEqual('Alice');s
  });

  it('should update server table UI', function () {
    submitServerInfo();

    expect(document.querySelectorAll('#serverTable td').length).toEqual(serverId * 2);
    expect (document.querySelectorAll('#serverTable td')[1].innerText).toEqual('$18.00');
    // expect(Object.keys(allServers).length).toEqual(1);
    // expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });



  afterAll(function() {
    let servers = document.querySelectorAll('#serverTable tr')

    for(let ser of servers){
      if (ser.id !== ''){
        ser.remove();
      }
    } 
    allServers = {};
    serverId = 0;
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
