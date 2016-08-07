
web: 
	jekyll clean -s ../frontend -d src/main/resources/assets
	jekyll build -s ../frontend -d src/main/resources/assets

web_ci: 
	jekyll build -s ../frontend -d target/classes/assets -w&

package: web
	mvn package

clean:
	mvn clean

compile:
	jekyll clean -s ../frontend -d target/classes/assets
	jekyll build -s ../frontend -d target/classes/assets
	mvn compile

run: compile
	mvn exec:java -Dexec.mainClass="com.getture.webapp.App" -Dexec.args="serve config.yaml" 

run_ci: web_ci
	mvn exec:java -Dexec.mainClass="com.getture.webapp.App" -Dexec.args="serve config.yaml"
	./kill_ci.sh

kill_ci:
	./kill_ci.sh

debug:
	mvn package -DskipTests
	java -Xdebug -Xrunjdwp:transport=dt_socket,server=y,address=9000 -jar target/getture-webapp-0.1.0.jar serve config.yaml

