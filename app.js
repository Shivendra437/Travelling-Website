// when we input some value the icon rotates to 180

Array.from(document.getElementsByTagName('input')).forEach((e, i) => {
    e.addEventListener('keyup', (el)=>{
        if(e.value.length > 0)
        {
            document.getElementsByClassName('bi bi-caret-down-fill ')[i].style.transform="rotate(180deg)";
        }
        else {
            document.getElementsByClassName('bi bi-caret-down-fill')[i].style.transfrom="rotate(0deg)";
        }
    })
});
