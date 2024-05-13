# URLs
    - uniform resource locator

    - www.amazon.com/clothing/jackets/d8923d93d
    #base Url
        - www.amazon.com
    #Endpoint
        - /clothing/jackets/
    #prameter - requesting specific resources from a database (id)
        - /clothing/jackets/:_id
        - /clothing/jackets/d8923d93d
    #query (query strings)
        - www.amazon.com/clothing/jackets?color=black&type=leather


        const query = {
            color: black,
            type: leather
        }