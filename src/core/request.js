
export const baseUrl = "https://7ifdnmyj01.execute-api.us-east-1.amazonaws.com/master" ;
// export const baseUrl = "http://localhost:5001" ;


export async function getBlogs(){
  try {
    const response = await fetch(baseUrl + '/api/v1/blogs', {
      method: 'GET',
    });
    if(response.status.toString()[0]=='2'){
      const res = await response.json();
      return res.data.blogs
    }
    else{
      const res = {status: "failed"}
      return []
    }
  }
  catch (error) {
    console.error("Something bad happened");
    console.error(error);
    const res = {status: "failed"}
    return []
  }
}

export async function submitQuery(data){
  try{
    const response = await fetch(baseUrl + '/api/v1/query', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    if(response.status.toString()[0]=='2'){
      const res = await response.json();
      return res.data
    }
    else{
      const res = {status: "failed"}
      return res
    }
  }
  catch (error) {
    console.error("Something bad happened");
    console.error(error);
    const res = {status: "failed"}
    return res
  }
}

export async function submitBookingRequest(data){
  try{
    const response = await fetch(baseUrl + '/api/v1/book', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    if(response.status.toString()[0]=='2'){
      const res = await response.json();
      return res.data
    }
    else{
      const res = {status: "failed"}
      return res
    }
  }
  catch (error) {
    console.error("Something bad happened");
    console.error(error);
    const res = {status: "failed"}
    return res
  }
}