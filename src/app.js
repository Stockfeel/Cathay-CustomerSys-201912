// test data section
const fields = {
  POLICY_NO: 48677377322,
  CLC_NO: 'A77536Y',
  PROD_SNAME: 'HN1富貴保本三福',
  APC_NAME: '林國泰',
  IS_JURISTIC: 'Y',
  APC_ID: 'H123456789',
  APC_BRDY: '76/11/26',
  INSD_NAME: '林國泰',
  INSD_ID: 'H123456789',
  INSD_BRDY: '76/11/26',
  EFT_CODE: '終身險滿期',
  MNXT_PAY_DATE: '逾期',
  IS_INV: 'Y',
  AUTO_PREM_AMTINT: 0,
  LOAN_BAL: 0,
  LOAN_INT: 0,
  INT_END_DATE: 0
};
const keys = Object.keys(fields);
const productInfo=['序號', '保單號碼收費代號', '商品名稱', '要保人姓名', '要保人ID', '要保人生日', '被保人姓名', '被保人ID','被保人生日', '契約狀況','下次應繳日/繳費管道', '墊繳本息', '貸款金額/貸款利息', '繳息終期']
const testData = Array(50).fill(null).map((item, idx) => {
  return {
    ...fields,
    ID: idx
  }
})

// main
document.querySelector('.back').addEventListener('click', () => window.scrollTo(0,0))
window.addEventListener('scroll', (evt) => {
  if(window.pageYOffset > 274) {
    document.querySelector('.header__result').style.height = '84px'
    document.querySelector('.header__result').classList.add('shadow')
    document.querySelector('.result__title').classList.add('hidden')
    document.querySelector('.result__info').classList.add('hidden')

  } else {
    document.querySelector('.header__result').style.height = '129px'
    document.querySelector('.header__result').classList.remove('shadow')
    document.querySelector('.result__title').classList.remove('hidden')
    document.querySelector('.result__info').classList.remove('hidden')
  }
})

document.querySelector('#info-sameId').addEventListener('mouseover', () => {
  document.querySelector('#hover-sameId').classList.remove('hidden')
})
document.querySelector('#info-sameId').addEventListener('mouseout', () => {
  document.querySelector('#hover-sameId').classList.add('hidden')
})

document.querySelector('#info-vip').addEventListener('mouseover', () => {
  document.querySelector('#hover-vip').classList.remove('hidden')
})
document.querySelector('#info-vip').addEventListener('mouseout', () => {
  document.querySelector('#hover-vip').classList.add('hidden')
})

document.querySelector('#info-notRecommend').addEventListener('mouseover', () => {
  document.querySelector('#hover-notRecommend').classList.remove('hidden')
})
document.querySelector('#info-notRecommend').addEventListener('mouseout', () => {
  document.querySelector('#hover-notRecommend').classList.add('hidden')
})

document.querySelector('.popup').addEventListener('click', (evt) => {
  if(evt.target.classList.contains('popup__close')) {
    document.querySelector('.popup').classList.add('hidden')
  }
})

document.querySelector('.products__titles').addEventListener('click', (evt) => {
  if(evt.target.classList.contains('order')) {
    const key = evt.target.getAttribute('data-value')
    evt.target.classList.toggle('up');
    evt.target.classList.toggle('down');
    document.querySelector('.products tbody').innerHTML = '';

    let arr;
    if(evt.target.classList.contains('up')) {
      arr = testData.sort((a, b) => a[key] - b[key])
    } else if(evt.target.classList.contains('down')) {
      arr = testData.sort((a, b) => b[key] - a[key])
    }
    renderList(arr)
  }
})

function renderList(arr) {
  arr.map(item => {
    const node = document.createElement("tr");
    node.innerHTML = `
      <td>
        ${item.ID}
      </td>
      <td> 
        <a class='link' href='#' target="_blank">${item.POLICY_NO}</a>
        <a class='link' href='#' target="_blank">${item.CLC_NO}</a>
      </td> 
      <td class='products__name'> 
        <a class='link' href='#' target="_blank">${item.PROD_SNAME}</a>
        <a class='link icon' href='#' target="_blank"></a>
      </td>
      <td> 
        <div>${item.APC_NAME}</div>
        <a class='type' href='#' target="_blank">${item.IS_JURISTIC ? '公司件' : ''}</a>
      </td>
      <td>${item.APC_ID}</td>
      <td>${item.APC_BRDY}</td>
      <td>${item.INSD_NAME}</td>
      <td>${item.INSD_ID}</td>
      <td>${item.INSD_BRDY}</td>
      <td>
        <div>${item.EFT_CODE}</div>
        <div>${item.MNXT_PAY_DATE}</div>
      </td>
      <td>
        <a class='link' href='#' target="_blank">48677377322</a>
        <div>扣繳/自繳</div>
      </td>
      <td>${item.AUTO_PREM_AMTINT}</td>
      <td>${item.LOAN_BAL}/${item.LOAN_INT}</td>
      <td>${item.INT_END_DATE}</td>
    `;
    document.querySelector('.products tbody').appendChild(node);
  });
}

renderList(testData)
