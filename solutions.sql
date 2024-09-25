CREATE TABLE EmissionParameters (
    ParameterID INT PRIMARY KEY AUTO_INCREMENT,
    Parameter VARCHAR(255) NOT NULL,
    Description TEXT NOT NULL,
    ImpactOnEmissions TEXT,
    FeasibilityRating INT,
    Notes TEXT
);

INSERT INTO EmissionParameters (Parameter, Description, ImpactOnEmissions, FeasibilityRating, Notes) 
VALUES 
('Excavators, Loading, Drills', 'Emissions from fuel used in heavy machinery like excavators, loaders, and drills.', 'Reduces CO2 emissions from fossil fuels.', 8, 'Depends on availability of electric machinery.'),
('Type of Explosives', 'Emissions caused by the use of explosives in mining.', 'Minimizes release of NOx and CO2.', 7, 'Requires advanced technology.'),
('Transportation of Ore Materials', 'Emissions of gases during ore material transportation.', 'Reduces CO2 emissions from vehicles.', 9, 'Infrastructure for charging or fueling needs to be developed.'),
('Chemicals: Type and Amount', 'Emissions from the use and processing of chemicals.', 'Reduces emissions from chemical reactions.', 7, 'Requires careful assessment of alternatives.'),
('Mine Waste: Type and Amount', 'Emissions and environmental impact from mine waste.', 'Decreases methane emissions from waste.', 6, 'Can be resource-intensive.'),
('Water Usage', 'Significant energy required for pumping and treating water.', 'Cuts down on energy-related emissions.', 8, 'High initial costs for renewable infrastructure.'),
('Air Emissions: CH4, SO2', 'Emissions of methane (CH4) and sulfur dioxide (SO2) during mining operations.', 'Reduces methane and sulfur dioxide release.', 7, 'Needs regular maintenance and investment.'),
('Carbon Capture and Storage (CCS)', 'Implementation of CCS in mining operations.', 'Potential to nearly eliminate CO2 emissions.', 6, 'High cost and technical challenges involved.'),
('Raw Material Used', 'Emissions related to extraction and processing of raw materials.', 'Overall reduction in carbon emissions.', 8, 'Depends on availability and suitability of alternatives.');


CREATE TABLE EmissionSolutions (
    SolutionID INT PRIMARY KEY AUTO_INCREMENT,
    ParameterID INT,
    PotentialSolution TEXT NOT NULL,
    FOREIGN KEY (ParameterID) REFERENCES EmissionParameters(ParameterID)
);


-- Solutions for ParameterID 1 (Excavators, Loading, Drills)
INSERT INTO EmissionSolutions (ParameterID, PotentialSolution) 
VALUES 
(1, 'Switch to electric or hybrid machinery.'),
(1, 'Optimize machinery operations through automation and AI to reduce fuel consumption.');
(1, 'The use of heavy machinery is unavoidable in mining operations, but it must be managed with utmost care, as any mishandling or operational errors can significantly aggravate pollution levels.')

-- Solutions for ParameterID 2 (Type of Explosives)
INSERT INTO EmissionSolutions (ParameterID, PotentialSolution) 
VALUES 
(2, 'Use low-emission explosives or green blasting techniques.'),
(2, 'Implement blast optimization to minimize the amount of explosive material used.');

-- Solutions for ParameterID 3 (Transportation of Ore Materials)
INSERT INTO EmissionSolutions (ParameterID, PotentialSolution) 
VALUES 
(3, 'Use electric or hydrogen-powered vehicles.'),
(3, 'Optimize transportation routes and loads to reduce fuel consumption.');

-- Solutions for ParameterID 4 (Chemicals: Type and Amount)
INSERT INTO EmissionSolutions (ParameterID, PotentialSolution) 
VALUES 
(4, 'Optimize chemical usage and switch to greener alternatives.'),
(4, 'Implement closed-loop systems to recycle and reuse chemicals.');

-- Solutions for ParameterID 5 (Mine Waste: Type and Amount)
INSERT INTO EmissionSolutions (ParameterID, PotentialSolution) 
VALUES 
(5, 'Implement better waste management practices, such as reprocessing and recycling.'),
(5, 'Use bioremediation techniques to treat and stabilize mine waste.');

-- Solutions for ParameterID 6 (Water Usage)
INSERT INTO EmissionSolutions (ParameterID, PotentialSolution) 
VALUES 
(6, 'Utilize renewable energy sources for water management.'),
(6, 'Implement water recycling systems to minimize fresh water usage.');

-- Solutions for ParameterID 7 (Air Emissions: CH4, SO2)
INSERT INTO EmissionSolutions (ParameterID, PotentialSolution) 
VALUES 
(7, 'Install air filtration and gas capture systems.'),
(7, 'Use alternative mining methods like in-situ leaching that produce fewer emissions.');

-- Solutions for ParameterID 8 (Carbon Capture and Storage (CCS))
INSERT INTO EmissionSolutions (ParameterID, PotentialSolution) 
VALUES 
(8, 'Apply CCS technology to capture and store CO2.'),
(8, 'Integrate CCS with renewable energy sources to power the capture process.');

-- Solutions for ParameterID 9 (Raw Material Used)
INSERT INTO EmissionSolutions (ParameterID, PotentialSolution) 
VALUES 
(9, 'Opt for raw materials with lower carbon footprints.'),
(9, 'Enhance material efficiency through better design and processing techniques.');
