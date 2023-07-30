const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
    e.preventDefault();
    
    navigator.clipboard.writeText(coupon.value)
    .then(() => {
            btn.textContent = "Copied";
            console.log('Hello')

            setTimeout(() => {
                btn.textContent = "Copy";
            }, 3000);
        });
};

btn.addEventListener("click", copyText);