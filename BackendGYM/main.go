package main

import (
	"fmt"
	"log"
	"net/http"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "¡El backend de GYMBUDDY está funcionando!")
}

func main() {
	http.HandleFunc("/", homeHandler)

	port := ":8080"
	log.Printf("Servidor iniciando en http://localhost%s\n", port)

	if err := http.ListenAndServe(port, nil); err != nil {
		log.Fatal("Error al iniciar el servidor: ", err)
	}
}
