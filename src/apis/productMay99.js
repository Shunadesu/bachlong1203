import { useQuery } from "@tanstack/react-query";

const query = `
	query getProductDailySales(
  $filter: DailySaleFilterInput
  $pageSize: Int
  $currentPage: Int
) {
  DailySales(filter: $filter, pageSize: $pageSize, currentPage: $currentPage) {
    items {
	 title
      identifier
      items {
        product {
          name
          url_key
		   image {
            url
          }
          	price_range {
             minimum_price {
   						   
                  final_price {
                  
  									value
                  }
                 
 						 }
 					 }
        }
        sale_price
        price_original
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
`;

const variables = {
  filter: {
    sale_type: {
      eq: "may99-valentine",
    },
  },
  pageSize: 99,
  currentPage: 1,
};

async function fetchProductMay99() {
  const response = await fetch("https://beta-api.bachlongmobile.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const data = await response.json();
  return data.data.DailySales.items;
}

const useProductMay99 = () => {
  return useQuery({
    queryKey: ["fetchProductMay99"],
    queryFn: fetchProductMay99,
    staleTime: 5000,
  });
};

export default useProductMay99;