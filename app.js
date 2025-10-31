// Minimal wiring for config + buttons
(function(){
  const el = (id)=>document.getElementById(id);
  const { BANK_NAME, ACCOUNT_NO, ACCOUNT_HOLDER, TOSS_LINK, KAKAOPAY_LINK } = window.__DONATION_CONFIG__ || {};

  // Fill account info
  el('bankName').textContent = BANK_NAME || '-';
  el('accountNo').textContent = ACCOUNT_NO || '-';
  el('accountHolder').textContent = ACCOUNT_HOLDER || '-';

  // Copy button
  el('copyBtn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NO || '');
      el('copyBtn').textContent = '복사됨';
      setTimeout(()=> el('copyBtn').textContent = '복사', 1200);
    } catch {
      alert('복사에 실패했습니다. 계좌번호를 길게 눌러 복사해 주세요.');
    }
  });

  // Buttons
  const go = (e, href) => {
    if (!href){ e.preventDefault(); alert('링크가 설정되지 않았습니다.'); return; }
    window.location.href = href;
  };
  document.getElementById('tossBtn').addEventListener('click', (e)=> go(e, TOSS_LINK));
  document.getElementById('kakaoBtn').addEventListener('click', (e)=> go(e, KAKAOPAY_LINK));
})();
