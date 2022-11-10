const img1 = 'https://ik.imagekit.io/ikmedia/backlit.jpg'
const img2 ='https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const img3 ='https://image.shutterstock.com/image-photo/nature-foto-view-beautiful-life-260nw-1950711865.jpg'
const img4 ='http://www.rosphoto.com/images/u/articles/1510/11_2.jpg'
const img5 ='https://klike.net/uploads/posts/2021-04/1618815701_51.jpg'

var currentImgName = 'air-balloon'

function changeImg(imgName){
    const mainImgEl = document.getElementById("main-img")

    if(imgName === 'air-balloon'){
        mainImgEl.src=img1;
    }

    if(imgName === 'sundown'){
        mainImgEl.src=img2;
    }

    if(imgName === 'lake'){
        mainImgEl.src=img3; 
    }

    if(imgName === 'mountains'){
        mainImgEl.src=img4;
    }

    if(imgName === 'landscape'){
        mainImgEl.src=img5;
    }

    currentImgName = imgName;
    changeActiveClass();

}

function goNext(){
if (currentImgName === 'air-balloon'){
    changeImg('sundown')
}
else if (currentImgName === 'sundown'){
    changeImg('lake')
}
else if (currentImgName === 'lake'){
    changeImg('mountains')
}
else if (currentImgName === 'mountains'){
    changeImg('landscape')
}
else if (currentImgName === 'landscape'){
    changeImg('air-balloon')
}
}

function goPrev(){
    if (currentImgName === 'air-balloon'){
        changeImg('landscape')
    }
    else if (currentImgName === 'landscape'){
        changeImg('mountains')
    }
    else if (currentImgName === 'mountains'){
        changeImg('lake')
    }
    else if (currentImgName === 'lake'){
        changeImg('sundown')
    }
    else if (currentImgName === 'sundown'){
        changeImg('air-balloon')
    }

}

function changeActiveClass() {
    const dotEl1 = document.getElementById('dot1');
    const dotEl2 = document.getElementById('dot2');
    const dotEl3 = document.getElementById('dot3');
    const dotEl4 = document.getElementById('dot4');
    const dotEl5 = document.getElementById('dot5');
    
    dotEl1.classList.remove('active');
    dotEl2.classList.remove('active');
    dotEl3.classList.remove('active');
    dotEl4.classList.remove('active');
    dotEl5.classList.remove('active');
    
    if(currentImgName === 'air-balloon'){
      dotEl1.classList.add('active');
    }
    
    if(currentImgName === 'sundown'){
      dotEl2.classList.add('active');
    }
    
    if(currentImgName === 'lake'){
      dotEl3.classList.add('active');
    }

    if(currentImgName === 'mountains'){
        dotEl4.classList.add('active');
      }
    
    if(currentImgName === 'landscape'){
        dotEl5.classList.add('active');
      }  
  }