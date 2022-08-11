# TP zetta
exercice fitec  avec zetta et node 

visualisation graphique : https://zetta-browser.herokuapp.com/#/overview?url=127.0.0.1:1337

Enoncé :
On considère le système d’irrigation ci-dessus.
Les robinets d’irrigation sont contrôlés à distance par des technologies IoT. La librairie Zettajs est 
utilisée pour contrôler les robinets connectés selon l’architecture ci-dessous :
Les trois robinets «robinet1», «robinet2», «robinet3» possèdent trois états de fonctionnement 
«fort» pour un débit d’eau élevé, «faible» pour un débit d’eau faible, et «ferme» pour un robinet 
fermé. Chaque robinet peut passer de l’état «ferme» à l’état «fort», et de létat «fort» à l’état 
«faible», et de l’état «faible» à l’état «ferme».
Pour optimiser la consommation d’eau, on crée une application zetta qui, lorsque le « robinet1 » est 
dans l’état « fort » met le « robinet2» dans l’état «faible» et le « robinet3 » dans l’état « ferme ».
Réaliser cette architecture en utilisant la librairie zetta