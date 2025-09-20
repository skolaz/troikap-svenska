#!/bin/sh
# Detta skript startar en enkel Python-webbserver i den aktuella katalogen.
# Det är ett praktiskt sätt att visa statiska filer för lokal utveckling.

echo "Startar en enkel Python-webbserver..."

# Kontrollera om python3 är tillgängligt.
if command -v python3 &> /dev/null
then
    # Kontrollera om ett specifikt portnummer anges som argument.
    if [ -z "$1" ]
    then
        PORT=8000
    else
        PORT=$1
    fi

    echo "Servern kommer att köras på port $PORT"
    echo "Du kan komma åt den på http://localhost:$PORT"
    echo "Servar filer från: $(pwd)"
    echo "Tryck Ctrl+C för att stoppa servern."

    # Starta servern med Pythons inbyggda http.server-modul.
    python3 -m http.server $PORT
else
    echo "Fel: python3-kommandot hittades inte."
    echo "Installera Python 3 för att köra detta skript."
fi

