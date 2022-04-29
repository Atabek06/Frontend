
        const addBtn = document.querySelector('#add');
		const subBtn = document.querySelector('#sub');
		let qty = document.querySelector('#num');
		const ResetBtn = document.querySelector('.ResetBtn button');


        addBtn.addEventListener('click',()=>{
			qty.value = parseInt(qty.value) + 1;
		});

		subBtn.addEventListener('click',()=>{
			if (qty.value <= 0) {
				qty.value = 0;
			}
			else{
				qty.value = parseInt(qty.value) - 1;
			}
		});
		ResetBtn.addEventListener('click', Reset);
		function Reset() {
			qty.value = 0;
		}
