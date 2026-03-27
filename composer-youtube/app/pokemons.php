<?php

require_once __DIR__ . '/vendor/autoload.php';

$html = '<table width="80%" cellspacing="0" border="1">
<thead>
<tr>
<th>Empid</th>
<th>Nombres</th>
<th>Salario</th>
<th>Edad</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Tiger Nixon</td>
<td>320800</td>
<td>61</td>
</tr>
<tr>
<td>2</td>
<td>Garrett Winters</td>
<td>434343</td>
<td>63</td>
</tr>
<tr>
<td>3</td>
<td>Ashton Cox</td>
<td>86000</td>
<td>66</td>
</tr>
<tr>
<td>4</td>
<td>Cedric Kelly</td>
<td>433060</td>
<td>22</td>
</tr>
<tr>
<td>5</td>
<td>Airi Satou</td>
<td>162700</td>
<td>33</td>
</tr>
<tr>
<td>6</td>
<td>Brielle Williamson</td>
<td>372000</td>
<td>61</td>
</tr>
<tr>
<td>7</td>
<td>Herrod Chandler</td>
<td>137500</td>
<td>59</td>
</tr>
<tr>
<td>8</td>
<td>Rhona Davidson</td>
<td>327900</td>
<td>55</td>
</tr>
<tr>
<td>9</td>
<td>Colleen Hurst</td>
<td>205500</td>
<td>39</td>
</tr>
<tr>
<td>10</td>
<td>Sonya Frost</td>
<td>103600</td>
<td>23</td>
</tr>
</tbody>
</table>';


$mpdf = new \Mpdf\Mpdf([
    'setAutoTopMargin' => 'stretch',
    'autoMarginPadding' => 7
]);

//llame al contenido y la imagen de la marca de agua
$mpdf->SetWatermarkText('MiEmpresa.com');
$mpdf->showWatermarkText = true;
$mpdf->watermarkTextAlpha = 0.1;


//guarde el archivo y coloque la ubicación que necesita carpeta/nombre de archivo
$mpdf->Output("miempresa.pdf", 'F');


//salida en el navegador debajo de la función de salida
$mpdf->Output();
?>