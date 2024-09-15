const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)

    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}



const displayPhones = (phones, isShowAll) =>{
 
    // 1.get the container div
    const phoneContainer = document.getElementById('phone-container');
    // cleAR PHONE CONTAINER CARDS BEFORE ADDING NEW CARDS
    phoneContainer.textContent = '';

// display show all button if there are more than 12Phones
const showAllContainer = document.getElementById("show-all-conatainer");
if(phones.length > 12 && !isShowAll){
  showAllContainer.classList.remove('hidden');
}
else{
  showAllContainer.classList.add('hidden');
}

console.log("is show All", isShowAll);
    //  display only first 12 phones if not show all
  if(!isShowAll){
    phones = phones.slice(0,12);
  }
 
    phones.forEach(phone => {
        // console.log(phone);
        // 2. create div
        const phoneCard = document.createElement('div');
        phoneCard.classList =  `card bg-gray-100 p-4 shadow-xl`;
        // 3.set inner html
        phoneCard.innerHTML = ` <figure>
              <img
                src="${phone.image}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${phone.
                phone_name}</h2>
              <p>There are many variations of passages of available, but the majority have suffered </p>
              <div class="card-actions justify-center">
                <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">show Details</button>
              </div>
            </div>`;
            // 4.appemd the child
            phoneContainer.appendChild(phoneCard);

    });

    // hide loading spinner

    toggleLoadingSpinner(false);
}




// handle show details button
const handleShowDetails = (id) =>{
  console.log("show details clicked", id)
}






// handle search button
const handleSearch = (isShowAll) =>{
  toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}

// handle search recap

// const handleSearch2 = () =>{
// toggleLoadingSpinner(true);
//   const searchField = document.getElementById('search-field2');
//    const searchText = searchField.value;
//    loadPhone(searchText);

// }

const toggleLoadingSpinner = (isLoading) =>{

  const loadingSpinner = document.getElementById("loading-spinner");
if(isLoading){
loadingSpinner.classList.remove('hidden');
}
else{
  loadingSpinner.classList.add("hidden");
}

}

// handle show all
const handleShowAll = () =>{
  handleSearch(true);
}





// loadPhone();