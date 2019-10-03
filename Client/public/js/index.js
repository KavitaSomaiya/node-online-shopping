


let indexData = [
  {
    indexImgUrl:'./images/mob-1.jpeg',
    name:'Vivo V15 Pro (Topaz Blue, 128 GB) (6 GB RAM)',
    price:'26,990',
    retailPrice:'32,990',
    discount: 18,
    className: 'heartClassGray',
    dataNumber: 1
  }, {
    indexImgUrl:'./images/mob-2.jpeg',
    name:'Honor 9N (Robin Egg Blue, 64 GB) (4 GB RAM)',
    price:'14,500',
    retailPrice:'15833',
    discount: 8,
    className: 'heartClassGray',
    dataNumber: 2
  }, {
    indexImgUrl:'./images/mob-3.jpeg',
    name:'Redmi Note 6 Pro (Black, 64 GB)  (6 GB RAM)',
    price:'13999',
    retailPrice:'17999',
    discount: 22,
    className: 'heartClassGray',
    dataNumber: 3
  }, {
    indexImgUrl:'./images/mob-4.jpeg',
    name:'Redmi Note 6 Pro (Red, 64 GB)  (4 GB RAM)',
    price:'11,999',
    retailPrice:'15,999',
    discount: 25,
    className: 'heartClassGray',
    dataNumber: 4
  }, {
    indexImgUrl:'./images/mob-5.jpeg',
    name:'Redmi Note 6 Pro (Blue, 64 GB)  (6 GB RAM)',
    price:'13999',
    retailPrice:'17999',
    discount: 22,
    className: 'heartClassGray',
    dataNumber: 5
  }, {
    indexImgUrl:'./images/mob-6.jpeg',
    name:'Redmi Note 7S (Ruby Red, 64 GB)  (4 GB RAM)',
    price:'13999',
    retailPrice:'15999',
    discount: 12,
    className: 'heartClassGray',
    dataNumber: 6
  }, {
    indexImgUrl:'./images/mob-7.jpeg',
    name:'Redmi Note 7 Pro (Nebula Red, 128 GB)  (6 GB RAM)',
    price:'16,999',
    retailPrice:'17,999',
    discount: 5,
    className: 'heartClassGray',
    dataNumber: 7
  }, {
    indexImgUrl:'./images/mob-8.jpeg',
    name:'OPPO F11 Pro (Thunder Black, 64 GB)  (6 GB RAM)',
    price:'20,990',
    retailPrice:'28,990',
    discount: 27,
    className: 'heartClassGray',
    dataNumber: 8
  }, {
    indexImgUrl:'./images/mob-9.jpeg',
    name:'OPPO K1 (Piano Black, 64 GB)  (4 GB RAM)',
    price:'12,990',
    retailPrice:'18,990',
    discount: 31,
    className: 'heartClassGray',
    dataNumber: 9
  }, {
    indexImgUrl:'./images/mob-10.jpeg',
    name:'Redmi Note 7 Pro (Space Black, 128 GB)  (6 GB RAM)',
    price:'16,999',
    retailPrice:'17,999',
    discount: 5,
    className: 'heartClassGray',
    dataNumber: 10
  }, {
    indexImgUrl:'./images/umbrella-1.jpeg',
    name:'Dragon Kids Head Umbrella Umbrella  (Multicolor)',
    price:'139',
    retailPrice:'499',
    discount: 72,
    className: 'heartClassGray',
    dataNumber: 11
  }, {
    indexImgUrl:'./images/umbrella-2.jpeg',
    name:'eweft Rainbow Sun and Rain Protection And Windproof Umbrella  (Multicolor)',
    price:'440',
    retailPrice:'700',
    discount: 37,
    className: 'heartClassGray',
    dataNumber: 12
  }, {
    indexImgUrl:'./images/umbrella-3.jpeg',
    name:'FabSeasons Big Polka Dots all Seasons Umbrella  (Maroon)',
    price:'555',
    retailPrice:'999',
    discount: 44,
    className: 'heartClassGray',
    dataNumber: 13
  }, {
    indexImgUrl:'./images/chappal-1.jpeg',
    name:'SOLAY THONG Flip Flops',
    price:'638',
    retailPrice:'1595',
    discount: 60,
    className: 'heartClassGray',
    dataNumber: 14
  }, {
    indexImgUrl:'./images/shoes-1.jpeg',
    name:'Provogue Sneakers For Men  (Grey)',
    price:'799',
    retailPrice:'1999',
    discount: 60,
    className: 'heartClassGray',
    dataNumber: 15
  }, {
    indexImgUrl:'./images/shoes-2.jpeg',
    name:'Lee Cooper Slip On For Men  (Black)',
    price:'1,484',
    retailPrice:'2699',
    discount: 45,
    className: 'heartClassGray',
    dataNumber: 16
  }, {
    indexImgUrl:'./images/jeans-1.jpeg',
    name:'Jealous 21 Skinny Women Blue Jeans',
    price:'509',
    retailPrice:'1644',
    discount: 68,
    className: 'heartClassGray',
    dataNumber: 17
  }, {
    indexImgUrl:'./images/jeans-2.jpeg',
    name:'Jealous 21 Slim Women Light Blue Jeans',
    price:'509',
    retailPrice:'1699',
    discount: 70,
    className: 'heartClassGray',
    dataNumber: 18
  }, {
    indexImgUrl:'./images/chappal-2.jpeg',
    name:'CHROMA THONG 5 Slippers',
    price:'747',
    retailPrice:'1065',
    discount: 50,
    className: 'heartClassGray',
    dataNumber: 19
  }, {
    indexImgUrl:'./images/saree-1.jpeg',
    name:'HNC Retail Floral Print Fashion Pure Georgette, Chiffon Saree  (Green)',
    price:'499',
    retailPrice:'2498',
    discount: 80,
    className: 'heartClassGray',
    dataNumber: 20
  }
]
window.localStorage.setItem('indexData', JSON.stringify(indexData))
console.log(indexData)
let newIndexData = JSON.parse(window.localStorage.getItem('newIndexData'))
console.log(newIndexData)

createIndexImg = () => {
  let newIndexData = JSON.parse(window.localStorage.getItem('newIndexData'))
  console.log(newIndexData)
  let indexDetails =''
  newIndexData.forEach(item => {
    const id = item.dataNumber
      indexDetails +=      
      `
        <li class='heartLiClass'>
          <section class='sortFilterSection m-0 p-0 cust-ouline-0 w-100 mw-100 backHtmlImgList'>
            <div class="container-fluid">
              <div class='row no-gutters' id='backHtmlOnOffer'>
                <div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <div class='mainImgSectionP'>
                    <p class='px-1'>On offer</p>
                  </div>
                </div>
              </div>
              <div class='row no-gutters my-4 my-sm-4 my-md-4 my-lg-4 my-xl-4' id='backHtmlImg'>
                <div class='col-2 col-sm-2 col-md-3 col-lg-2 col-xl-2'>
                  <div>
                    <div class='backHtmlImgClass' onclick="goToItemDetail('${id}');">
                      <img alt src='${item.indexImgUrl}' /> 
                    </div>
                  </div>
                </div>
                <div class='col-8 col-sm-8 col-md-8 col-lg-9 col-xl-9 px-1'>
                  <div class='d-flex flex-column' id='productDesc2'>
                    <div>
                      <h1 class onclick="goToItemDetail('${id}');">
                        ${item.name}
                        <span><a href='#'>#JustHere</a></span>
                      </h1>
                      <p class='text-black font-weight-bold mb-0'>
                        ₹${item.price}
                        <span class='mx-4 text-mute' style='text-decoration: line-through;'>₹${item.retailPrice}</span>
                        <del class='text-success'>${item.discount}% off</del>
                      </p>
                      <div class='d-inline-flex align-items-bottom'>
                        <p class='mt-2 pt-0 font-weight-bold'>
                          Exchange available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 px-1 heartClassSection bg-white'  type='button'>
                  <div class='row no-gutters justify-content-center align-items-center'>
                    <div class='mainImgSectionHeart w-50 text-center'>
                      <i id="${item.dataNumber}" onclick='toggleAndAddToWishList("${item.dataNumber}", event);' class='heartClassFontSize ${item.className} heartClass fa fa-heart p-2 p-sm-2 p-md-2 py-lg-3 px-lg-2 py-xl-4 px-xl-1' aria-hidden='true'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>
      `
    })
  document.querySelector('#indexImgId').innerHTML = indexDetails
}

function goToItemDetail (it) {
  let itm = parseInt(it)
  let curItem = indexData.filter(i => i.dataNumber === itm)
  console.log(curItem)
  window.localStorage.setItem('curItem', JSON.stringify(curItem[0]))
  window.location.href = './item-details.html'
}

function goToIndexPage () {
  window.open('./index.html','_self','scrollbars=yes,menubar=yes')
  window.focus()
}

function srch () {
  document.querySelector('#searchId').classList.toggle('d-block')
}
 

function toggleAndAddToWishList (it, e) {
  debugger
  e.target.classList.toggle('text-danger')
  if (e.target.classList.contains('text-danger')) {
    let itm = parseInt(it) 
    let curWishItem = indexData.filter(i => i.dataNumber === itm)
    let myWishItems = JSON.parse(window.localStorage.getItem('curWishItem'))
    var wishItems = window.localStorage.getItem('wishItems')
    if (wishItems=== "undefined") {
      let wishItems = []
      wishItems.push(curWishItem[0])      
      window.localStorage.setItem('wishItems', JSON.stringify(wishItems))
      
    } else  {
      wishItems = JSON.parse(wishItems)
      wishItems.push(curWishItem[0])      
      window.localStorage.setItem('wishItems', JSON.stringify(wishItems))      
    }
  } else  {
    let no = parseInt(it)
    let wishItems = JSON.parse(window.localStorage.getItem('wishItems'))
    
    let removedWishItem = wishItems.filter(j => j.dataNumber !== no)
    wishItems = removedWishItem
    window.localStorage.setItem('wishItems', JSON.stringify(wishItems))    
  }
    
}
window.localStorage.setItem('newIndexData', JSON.stringify(newIndexData))
    
//function wishList () {
  //debugger;
  //let wishItems = JSON.parse(window.localStorage.getItem('wishItems'))
  //console.log(wishItems)
  //if (wishItems.length > 0) {
//    document.querySelector('.heartClass').classList.remove('heartClassGray')
  //  document.querySelector('.heartClass').classList.add('text-danger')
  //}
//}

//function toggleHeartClr (e) {
  //e.target.classList.toggle('text-danger')
//}




function goToWishList () {
  window.open('./wish-list.html','_self','scrollbars=yes,menubar=yes')
}