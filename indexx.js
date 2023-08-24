<!DOCTYPE html>
<html lang="en"
data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
<link href="https://cdn.jsdelivr.net/npm/daisyui@3.5.1/dist/full.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="container mx-auto">
    <header class="bg-[#F9F6E2]">
        <div class="flex justify-center items-center">
            <div>
                <h1 class="text-2xl font-semibold">---SALE FEVER---</h1> <br>
                <h1 class="text-4xl font-bold">Purchase TK 200 or <br> above & get <span class="text-[#E527B2]">20% off</span></h1>
             <span class="pt-4 text-xl font-semibold"> Use Promo Code</span>
                <button class="btn bg-[#E527B2] text-white mt-5 font-semibold">SELL200</button>
            </div>
            <div>
                <img  src="./images/Summer 1.png" alt="">
            </div>

        </div>

    </header>
    <main>

        
        <section class="mt-20 bg-[#F8F8F8]">
            
            <div class="flex gap-5 lg:flex-row flex-col">
                
                <div class="grid flex-1 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                 
                    <!-- card-1 -->
             
                  <div>
                    <div id="Card" onclick="firstClickCard(this)" class="card w-96 bg-base-100 shadow-xl">
                      
                      <figure class="px-10 pt-10 ">
                        <img src="./images/prod1.png" alt="Shoes" class="rounded-xl" />
                      </figure>
                      <div class="rating justify-center mt-3">
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                      <div class="card-body items-center ">
                        <h2 id="products-Name" class="card-title text-center">K. Accessories</h2>
                        <p > <span  id="price"> 39.00 </span> TK</p>
                          
                      </div>
                    </div>
                  </div>

                      <!-- card-2 -->

                    <div onclick="secondClickCard()" class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10 ">
                          <img src="./images/prod2.png" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="rating justify-center mt-3">
                            <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400"  checked />
                            <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" />
                          </div>
                        <div class="card-body items-center text-center">
                          <h2 id="products-Name2" class="card-title">K. Accessories2</h2>
                          <p id="prices2">25.00 TK</p>
                         
                        </div>
                      </div>
                      <!-- card-3 -->

                    <div onclick="ThirdClickCard()" class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10 ">
                          <img src="./images/prod3.png" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="rating justify-center mt-3">
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" />
                          </div>
                        <div class="card-body items-center text-center">
                          <h2 id="products-Name3" class="card-title">Home Cooker</h2>
                          <p id="prices3" >49.00 TK</p>
                         
                        </div>
                      </div>
                
                      <!-- sportswear -->
                      <div onclick="FourthClickCard()" class="card w-96 bg-base-100 shadow-xl">
                      
                        <figure class="px-10 pt-10 ">
                          <img src="./images/prod4.png" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="rating justify-center mt-3">
                            <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" />
                          </div>
                        <div class="card-body items-center text-center">
                          <h2 id="products-Name4" class="card-title">Sports Back Cap</h2>
                          <p id="prices4">59.00 TK</p>
                         
                        </div>
                      </div>
                      <!--  -->

                      <div onclick="FifthClickCard()" class="card w-96 bg-base-100 shadow-xl">
                      
                        <figure class="px-10 pt-10 ">
                          <img src="./images/prod5.png" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="rating justify-center mt-3">
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                          </div>
                        <div class="card-body items-center text-center">
                          <h2 id="products-Name5" class="card-title">Full Jersey Set</h2>
                          <p id="prices5">79.00 TK</p>
                         
                        </div>
                      </div>
                      <!--  -->
                      <div onclick="sixthClickCard()" class="card w-96 bg-base-100 shadow-xl">
                      
                        <figure class="px-10 pt-10 ">
                          <img src="./images/prod6.png" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="rating justify-center mt-3">
                            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                          </div>
                        <div class="card-body items-center text-center">
                          <h2 id="products-Name6" class="card-title">Sports cates</h2>
                          <p id="prices6">239.00 TK</p>
                         
                        </div>
                      </div>
                 

                </div>
                
                <!-- another part -->
                <div class="">
                    <h1 class="text-2xl font-semibold">Have coupon?</h1>
                   <input id="input-text" type="text" placeholder="Coupon Code" class="input input-bordered  max-w-xs" />
                    <button id="btn-submit" class="btn btn-error bg-[#E527B2] text-white">Apply</button>

                    <div class="text-2xl font-semibold " id="container">
                    
                        

                    </div>

                    <div  class="mt-10">
                        <h1 class="text-2xl font-semibold ">   Total Price: <span id="Total-Prices" class="text-gray-400"> </span> <span class="text-gray-400">TK</span> </h1> <br>

                        <h1 class="text-2xl font-semibold">Discount: <span id="discount" class="text-gray-400"> </span> 
                        <span class="text-gray-400"> TK</span></h1> <br>
                        <h1 class="text-2xl font-semibold">Total:</h1> <br>
                    </div>


                    <!-- <button class="btn btn-error bg-[#E527B2] text-white w-full">Make Purchase</button> -->

                    <!-- Open the modal using ID.showModal() method -->
                    <button class="btn btn-error bg-[#E527B2] text-white w-full" onclick="my_modal_1.showModal()">Make Purchase</button>
                    <dialog id="my_modal_1" class="modal">
                    <form method="dialog" class="modal-box">
                       <div class="flex justify-center items-center">
                        <img class="" src="./images/congo.png" alt="">
                       </div>
                        <h3 class="font-bold text-3xl text-center">Congratulations</h3>
                        <p class="py-4 text-center">Your Purchase the product</p>
                        <div class="modal-action">
                        <!-- if there is a button in form, it will close the modal -->
                        <div class="flex justify-center items-center">
                            <button class="btn btn-error bg-[#E527B2] text-white">Go Home</button>
                        </div>
                        </div>
                    </form>
                    </dialog>
              
                   

                </div>

            </div>
        </section>

    </main>
    <script src="style.js"></script>
    <!-- <script src="new.js"></script> -->
   
 
</body>
</html>