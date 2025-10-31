(function(){
  const el = (id)=>document.getElementById(id);
  const { BANK_NAME, ACCOUNT_NO, ACCOUNT_HOLDER, TOSS_LINK, KAKAOPAY_LINK } = window.__DONATION_CONFIG__ || {};

  el('bankName').textContent = BANK_NAME || '-';
  el('accountNo').textContent = ACCOUNT_NO || '-';
  el('accountHolder').textContent = ACCOUNT_HOLDER || '-';

  el('copyBtn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NO || '');
      el('copyBtn').textContent = '복사됨';
      setTimeout(()=> el('copyBtn').textContent = '복사', 1200);
    } catch {
      alert('복사에 실패했습니다. 복사 버튼을 다시 눌러주세요.');
    }
  });

  const go = (e, href) => {
    if (!href){ e.preventDefault(); alert('링크가 설정되지 않았습니다.'); return; }
    window.location.href = href;
  };
  document.getElementById('tossBtn').addEventListener('click', (e)=> go(e, TOSS_LINK));
  document.getElementById('kakaoBtn').addEventListener('click', (e)=> go(e, KAKAOPAY_LINK));
})();
