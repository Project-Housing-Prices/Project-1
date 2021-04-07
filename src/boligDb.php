<?php
require_once 'dbconnect.php';
$sql = "SELECT * FROM info";

$result = $conn->query($sql);
$dbdata = array();

while($row = $result->fetch_assoc()){
	$dbdata[] = $row;
}

$bilder = array();
$sql = "SELECT * FROM bilder";
$result = $conn->query($sql);

while($row = $result->fetch_assoc()){
	$bilder[] = $row;
}

echo json_encode(array($dbdata, $bilder));

/*if ($result = $conn -> query($sql)) {
	while ($row = $result -> fetch_array()) {
		//echo $row["adresse"]. " ". $row["adresseNr"];
		//echo $row["fornavn"]. " " . $row["etternavn"];
		//echo  $row["beskrivelse"];
		//$data = array($row["adresse"], $row["adresseNr"], $row["fornavn"], $row["etternavn"], $row["beskrivelse"]);
		//array_push($obj_data, $data);

		//printf("(%s) -%s- {%s} [%s] '%s' \n", $row->adresse, $row->adresseNr, $row->beskrivelse, $row->fornavn, $row->etternavn);
		//printf("{\"adresse\" = \"%s\", \"adresseNr\" = \"%s\", \"beskrivelse\" = \"%s\", \"fornavn\" = \"%s\", \"etternavn\" = \"%s\",},", $row->adresse, $row->adresseNr, $row->beskrivelse, $row->fornavn, $row->etternavn);

		$result[] = array(
			'adresse' => $row["adresse"],
			'adresseNr' => $row["adresseNr"],
			'beskrivelse' => $row["beskrivelse"],
			'fornavn' => $row["fornavn"],
			'etternavn' => $row["etternavn"]
		);
	}
}*/
//$json = json_encode($result);

$conn->close();
?>