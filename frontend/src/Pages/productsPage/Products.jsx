import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { useLocation, useParams } from "react-router";
import { getProducts } from "../../Redux/Products/products.action";
import { Box, Checkbox, Select } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import ProductDiv from "../../Components/Products/ProductDiv";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../Components/Products/Pagination";
//import data from "./data";

const Products = () => {

  const [sort ,setSort]=useState("")
  const [order ,setOrder]=useState("")

  const [searchParams,setSearchParams]=useSearchParams()
  const initialCategory=searchParams.getAll("category")
  const [category,setCategory]=useState(initialCategory || [])
  //const { target } = useParams();
  const [page,setPage]=useState(1)
  const dispatch=useDispatch()
  const limit=10
  let totalPages=4


  const {loading , error, products}=useSelector((store)=>store.productManager)
const location =useLocation()

  //console.log(location)



  useEffect(()=>{
    let params={}
    if(location || products.length===0){
      const getProductsParams={
        params:{
          category,
          sort,
          order
        }
      }
      dispatch(getProducts(getProductsParams))
  // console.log(getProductsParams)
    }
    params.category=category
    setSearchParams(params)
  

  },[products.length,dispatch,category,setSearchParams,location.search,sort,order])


  let parts;
  let details;
  //console.log(data)

const target="Filter"
  let a =
    "Oil changes at prescribed intervals are still the best way to get the most miles out of any engine. Conventional oil can go 3K-5K miles between changes, with a somewhat longer interval for synthetic blend. Full synthetic can go for longer intervals, so be sure to check your owner’s manual recommendations. Whether you're opting for full synthetic (required by new-car warranties), synthetic high-mileage, conventional, high-mileage, or synthetic blend, you've come to the right place. We've got motor oil from top brands like FRAM, Mobil 1, Castrol, Valvoline, Pennzoil, Royal Purple, and much more, right here at Advance.";

  let b =
    "Oil changes at prescribed intervals are still the best way to get the most miles out of any engine. Conventional oil can go 3K-5K miles between changes, with a somewhat longer interval for synthetic blend. Full synthetic can go for longer intervals, so be sure to check your owner’s manual recommendations. Whether you're opting for full synthetic (required by new-car warranties), synthetic high-mileage, conventional, high-mileage, or synthetic blend, you've come to the right place. We've got motor oil from top brands like FRAM, Mobil 1, Castrol, Valvoline, Pennzoil, Royal Purple, and much more, right here at Advance.";
  target === "Filter" ? (parts = "Filter") : (parts = "Oil & Fluids");
  target === "Filter" ? (details = a) : (details = b);
const handleFilterCheckbox=(e)=>{
  
  const newCategories=[...category]
  if(newCategories.includes(e.target.value)){
    newCategories.splice(newCategories.indexOf(e.target.value),1)
  }else{
    newCategories.push(e.target.value)
  }
  setCategory(newCategories)
}
function handleClick(val){

  setPage(val)

}

  return (
    <div className={styles.productSection}>
      <div className={styles.proTop}>
        <p style={{ paddingRight: "10px" }}> Home /{"  "}</p>

        <p>{parts} Section / AutoParts</p>
      </div>
      <div className={styles.proHeading}>
        <h1>{parts}</h1>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsDiv1}>
          <p style={{ textAlign: "left" }}>{details}</p>
        </div>
        <div className={styles.detailsDiv2}>
          <img
            style={{ height: "100%" }}
            src="https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2023/01/Category-L3s_Legacy_450X112_1.jpg"
          />
        </div>
      </div>
      <div className={styles.sortSec}>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "2rem",
          }}
        >
          <Select
            size="md"
            variant="yellow"
            w={"200px"}
            className={styles.sortMain}
            onChange={(e)=>{
              let arr=e.target.value.split("-")
              setSort(arr[0])
              setOrder(arr[1])
              
            }}
          >
            <option value="-">Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="ratings-asc">Rating: Low to High</option>
            <option value="ratings-desc">Rating: High to low</option>
            <option value="reviews-asc">Reviews: Low to High</option>
            <option value="reviews-desc">Reviews: High to low</option>
          </Select>
          <h1 style={{ fontSize: "16px", padding: ".5rem" }}>Sort By</h1>
        </div>
      </div>

      <div className={styles.bodyMainSec}>
        <div className={styles.filterMainSec}>
        <div className={styles.filterDiv}>
            <h1 style={{ padding: "10px",  }}>Category</h1>
            <div style={{ padding: "10px" , display:"flex", flexDirection:"column"}}>
              <Checkbox colorScheme="gray" onChange={handleFilterCheckbox} checked={category.includes("Air Filter")} value="Air Filter">Air Filter</Checkbox>
              <Checkbox colorScheme="gray" value="Motor Oil" checked={category.includes("Motor Oil")} onChange={handleFilterCheckbox} >Motor Oil</Checkbox>
              <Checkbox colorScheme="gray" value="Turbo Chargers" checked={category.includes("Turbo Chargers")} onChange={handleFilterCheckbox}>Turbo Chargers</Checkbox>
            </div>
          </div>

          <div className={styles.filterDiv}>
            <h1 style={{ padding: "10px" }}>Brand</h1>
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Checkbox colorScheme="gray">Ajusa</Checkbox>
              <Checkbox colorScheme="gray">Carquest</Checkbox>
              <Checkbox colorScheme="gray">Carquest Primium</Checkbox>
              <Checkbox colorScheme="gray">Champion</Checkbox>
              <Checkbox colorScheme="gray"> Driveworks (11)</Checkbox>
            </div>
          </div>

          <div className={styles.filterDiv}>
            <h1 style={{ padding: "10px" }}>Products Rating</h1>
            <div
              style={{
                gap: "25px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Checkbox colorScheme="gray">
                <Box px={2} display="flex" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < 5 ? "teal.500" : "gray.300"}
                      />
                    ))}
                </Box>
              </Checkbox>
              <Checkbox colorScheme="gray">
                <Box px={2} display="flex" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < 4 ? "teal.500" : "gray.300"}
                      />
                    ))}
                </Box>
              </Checkbox>

              <Checkbox colorScheme="gray">
                <Box px={2} display="flex" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < 3 ? "teal.500" : "gray.300"}
                      />
                    ))}
                </Box>
              </Checkbox>

              <Checkbox colorScheme="gray">
                <Box px={2} display="flex" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < 2 ? "teal.500" : "gray.300"}
                      />
                    ))}
                </Box>
              </Checkbox>

              <Checkbox colorScheme="gray">
                <Box px={2} display="flex" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < 1 ? "teal.500" : "gray.300"}
                      />
                    ))}
                </Box>
              </Checkbox>

              <Checkbox colorScheme="gray">Not Rated Yet</Checkbox>
            </div>
          </div>

          <div className={styles.filterDiv}>
            <h1 style={{ padding: "10px" }}>Show Products</h1>
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Checkbox colorScheme="gray">Fitted Parts (1)</Checkbox>
              <Checkbox colorScheme="gray">
                General Use Parts & Products{" "}
              </Checkbox>
            </div>
          </div>
          <div className={styles.filterDiv}>
            <h1 style={{ padding: "10px" }}>Shipping and Pickup</h1>
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Checkbox colorScheme="gray">
                Fast & Free In-Store Pickup
              </Checkbox>
              <Checkbox colorScheme="gray">Ship to Home </Checkbox>
            </div>
          </div>
         

       
          <div className={styles.filterDiv}>
            <h1 style={{ padding: "10px" }}>Brand</h1>
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Checkbox colorScheme="gray">Ajusa</Checkbox>
              <Checkbox colorScheme="gray">Carquest</Checkbox>
              <Checkbox colorScheme="gray">Carquest Primium</Checkbox>
              <Checkbox colorScheme="gray">Champion</Checkbox>
              <Checkbox colorScheme="gray"> Driveworks (11)</Checkbox>
            </div>
          </div>
          <div className={styles.filterDiv}>
            <h1 style={{ padding: "10px" }}>Price</h1>
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Checkbox colorScheme="gray">Less than $10 (5)</Checkbox>
              <Checkbox colorScheme="gray">$10 - $24.99 (6)</Checkbox>
            </div>
          </div>

          <div className={styles.filterDiv}>
            <h1 style={{ padding: "10px" }}>Related Parts</h1>
            <div style={{ padding: "10px " }}>
              <h2 style={{ paddingBottom: "10px " }}>Air Filter Housing</h2>
              <h2 style={{ paddingBottom: "10px " }}>Filters - Performance</h2>
              <h2 style={{ paddingBottom: "10px " }}>Air Filter Hardware</h2>
              <h2 style={{ paddingBottom: "10px " }}>
                Oval Tapered Air Filters
              </h2>
              <h2 style={{ paddingBottom: "10px " }}>
                Air Filter Oils & Cleaners
              </h2>
              <h2 style={{ paddingBottom: "10px " }}>
                Dual Flanged Oval Filters
              </h2>
              <h2 style={{ paddingBottom: "10px " }}>Universal Air Filters</h2>
            </div>
          </div>

          <div className={styles.filterDiv}>
            <h1 style={{ padding: "10px" }}>Subcategories</h1>
            <div style={{ padding: "10px " }}>
              <h2 style={{ paddingBottom: "10px " }}>Air Filter Wrap</h2>
              <h2 style={{ paddingBottom: "10px " }}>
                Small Engine Filter & Tune-Up
              </h2>
              <h2 style={{ paddingBottom: "10px " }}>Air Filter</h2>
              <h2 style={{ paddingBottom: "10px " }}>Filters</h2>
            </div>
          </div>
        </div>

        <div className={styles.productsMainSec}>
          <div className={styles.productMain}>
            {products.length>0 && products.map((e) => (
              <ProductDiv key={e.id} data={e} />
            ))}
          </div>
        </div>
      </div>
        <div style={{ margin: "auto",border:"1px solid black",zIndex:"10", gap: "2rem",  padding: "2rem" }}>
                <Pagination page={page} totalPages={totalPages} handleClick={handleClick}/>
        </div>
    </div>
  );
};

export default Products;
