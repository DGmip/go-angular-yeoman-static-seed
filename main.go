// package main
//
// import (
// 	// "html/template"
// 	"net/http"
//   "fmt"
//
//   "google.golang.org/appengine"
// )
//
// func init() {
// 	http.HandleFunc("/", dev)
// }
//
// func check(err error) {
//   if err != nil {
//     panic(err)
//   }
// }
//
// func dev(w http.ResponseWriter, r *http.Request) {
//   http.Handle("/app/", http.FileServer(http.Dir(".")))
//
//   http.HandleFunc("/", homepageHandler)
//   appengine.Main()
//
//
//   // t, err := template.New("templates").Delims(DELIM_L, DELIM_R).ParseFiles("app/index.html")
//   // data := make(map[string]interface{})
// 	// err = t.Execute(w, data);check(err)
// }
//
// func homepageHandler(w http.ResponseWriter, r *http.Request) {
//     fmt.Fprint(w, "app/index.html")
// }
package main

// import "net/http"

func main() {
    // panic(http.ListenAndServe(":8080", http.FileServer(http.Dir("/app/"))))
}
