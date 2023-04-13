#!/bin/bash

HOST="tcpip"
PORT=5555

nc -z -w5 $HOST $PORT

if [ $? -eq 0 ]
then
	echo "Port $PORT on $HOST is open" > port_status.txt
else
	echo "Port $PORT on $HOST is clesed" > port_status.txt
fi
