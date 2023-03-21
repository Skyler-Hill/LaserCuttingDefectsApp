var materialThickness = Text(material_thickness.Text);
var laserPower = Text(Laser_Power.Text);
var laserSource = Text(Laser_Source.Text);
var materialType = Text(Material_Type.Text);

var filterFormula = "Material_Thickness='" + materialThickness + "' && Laser_Power='" + laserPower + "' && Laser_Source='" + laserSource + "' && Material_Type='" + materialType + "'";

var filteredTable = Filter(Laser_Details, filterFormula);

var filteredRow = First(filteredTable);

label110.Text = Text(filteredRow['Laser Power1']);
label111.Text = Text(filteredRow['Laser Type']);
label112.Text = Text(filteredRow['Metal Type']);
label113.Text = Text(filteredRow['Thickness']);
label114.Text = Text(filteredRow['Laser Focus']);
label115.Text = Text(filteredRow['Nozzle Type']);
label116.Text = Text(filteredRow['Nozzle Height']);
label117.Text = Text(filteredRow['Measurement Type']);
label118.Text = Text(filteredRow['Speed']);
label119.Text = Text(filteredRow['Power Percentage Usage']);
label120.Text = Text(filteredRow['Gas Perssure']);
label121.Text = Text(filteredRow['Gas Type']);
