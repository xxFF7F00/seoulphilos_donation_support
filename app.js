// Read config and wire up UI / deep links
(function(){
  const el = (id)=>document.getElementById(id);
  const { BANK_NAME, ACCOUNT_NO, ACCOUNT_HOLDER, TOSS_LINK, KAKAOPAY_LINK } = window.__DONATION_CONFIG__ || {};

  //계좌정보
  el('bankName').textContent = BANK_NAME || '-';
  el('accountNo').textContent = ACCOUNT_NO || '-';
  el('accountHolder').textContent = ACCOUNT_HOLDER || '-';

  //복사
  el('copyBtn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NO || '');
      el('copyBtn').textContent = '복사됨';
      setTimeout(()=> el('copyBtn').textContent = '복사', 1200);
    } catch (e) {
      alert('복사에 실패했습니다. 계좌번호를 길게 눌러 복사해 주세요.');
    }
  });

  // Link buttons
  const tk = (e, href) => {
    if (!href) {
      e.preventDefault();
      alert('링크 미설정');
      return false;
    }
    window.location.href = href;
  };

  el('tossBtn').addEventListener('click', (e)=> tk(e, TOSS_LINK));
  el('kakaoBtn').addEventListener('click', (e)=> tk(e, KAKAOPAY_LINK));
})();
