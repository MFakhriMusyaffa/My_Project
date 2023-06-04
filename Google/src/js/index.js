function search(){
    let { value } = document.getElementById
    ('searchInput')

    const baseUrl = "https://google.com/search?q="
    if(!value) value = "Muhammad Fakhri Musyaffa"
    location.replace(baseUrl + value)
}