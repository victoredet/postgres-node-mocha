# Enyata test.

for the best experience, I have containarised the aplication with docker

to start application, cd to prject root and run the following command
'docker-compose up' or 'sudo docker-compose up' depending on your user privileges

update app.js with your intended port for app to run

sample

localhost:3000/ should return all incident instances
localhost:3000?city=lagos?temp_min={enter your min temp here} should return all incident from this city. this extends if you add temp_min, temp_max, humidity_min, humidity_max
finally,

localhost:3000/country should return all incident instances from that country
