import pandas as pd
import datetime as dt
import time

expeditionTypesDict = {
    'A': 'Aboriginal',    'C': 'Commercial',    'Co': 'Commercial under objection',    'Cr': 'Commercial under reservation',
    'I': 'Illegal',    'S': 'Special permit',    '-': 'No catch'
}

whaleSpeciesDict = {
    0: "Unknown",           1: "Pilot",         2: "Bottlenose",        3: "Killer",                4: "Blue",
    5: "Fin",               6: "Sperm",         7: "Humpback",          8: "Sei",                   9: "Common Minke",
    10: "Bryde's",          11: "Right",        12: "Gray",             13: "Baird's Beaked",       14: "Baleen",
    15: "Pygmy Blue",       16: "Pygmy Right",  17: "Cuvier's Beaked",  18: "Bowhead",              19: "Beaked (unspecified)",
    20: "Antarctic Minke",  21: "Sei/Bryde's",  22: "Dolphin",          -1: "Start exp marker",     -2: "End exp marker"
}

oceansDict = {
    'IO': 'Indian Ocean',
    'NP': 'North Pacific',
    'SP': 'South Pacific',
    'NA': 'North Atlantic',
    'SA': 'South Atlantic',
    'SH': 'Southern Hemisphere'
}

countriesDict = {
    'ARG': 'Argentina',     'AUS': 'Australia',     'BER': 'Bermuda',       'BHM': 'Bahamas',       'BRZ': 'Brazil',
    'CHL': 'Chile',         'CHN': 'China',         'CND': 'Canada',        'DMK': 'Denmark',       'EQR': 'Equador',
    'FRN': 'France',        'GER': 'Germany',       'ICE': 'Iceland',       'Ind': 'Indonesia',     'JAP': 'Japan',
    'KOR': 'Korea',         'N.Z': 'New Zealand',   'NOR': 'Norway',        'NTH': 'Netherlands',   'PAN': 'Panama',
    'PER': 'PERU',          'PHL': 'Philippines',   'POR': 'Portugal',      'RUS': 'Russia',        'S.A': 'South Africa',
    'S.V': 'Saint Vincent', 'SPN': 'Spain',         'TWN': 'Taiwan',        'UK': 'United Kingdom', 'USA': 'United States of America',
    'USS': 'Russia'
}

if __name__ == '__main__':
    start = time.clock_gettime(0)
    allCatchDf = pd.read_excel(io='All-V7.1-Dec-2020.xlsx', sheet_name=None, header=None, keep_default_na=False, engine='openpyxl')
    ioDf = pd.read_csv('IO.csv', header=0, usecols=['Day', 'Mon', 'Year', 'Sp', 'LatDeg', 'LatMn', 'LatHem', 'LonDeg', 'LonMn', 'LonHem', 'Sum-Ex'])
    npDf = pd.read_csv('NP.csv', header=0, usecols=['Day', 'Mon', 'Year', 'Sp', 'LatDeg', 'LatMn', 'LatHem', 'LonDeg', 'LonMn', 'LonHem', 'Sum-Ex'])
    spDf = pd.read_csv('SP.csv', header=0, usecols=['Day', 'Mon', 'Year', 'Sp', 'LatDeg', 'LatMn', 'LatHem', 'LonDeg', 'LonMn', 'LonHem', 'Sum-Ex'])
    naDf = pd.read_csv('NA.csv', header=0, usecols=['Day', 'Mon', 'Year', 'Sp', 'LatDeg', 'LatMn', 'LatHem', 'LonDeg', 'LonMn', 'LonHem', 'Sum-Ex'])
    saDf = pd.read_csv('SA.csv', header=0, usecols=['Day', 'Mon', 'Year', 'Sp', 'LatDeg', 'LatMn', 'LatHem', 'LonDeg', 'LonMn', 'LonHem', 'Sum-Ex'])
    suDf = pd.read_csv('SU.csv', header=0, usecols=['Day', 'Mon', 'Year', 'Sp', 'LatDeg', 'LatMn', 'LatHem', 'LonDeg', 'LonMn', 'LonHem', 'Sum-Ex'])
    shp1Df = pd.read_csv('SHP1.csv', header=0, usecols=['Day', 'Mon', 'Year', 'Sp', 'LatDeg', 'LatMn', 'LatHem', 'LonDeg', 'LonMn', 'LonHem', 'Sum-Ex'])
    shp2Df = pd.read_csv('SHP2.csv', header=0, usecols=['Day', 'Mon', 'Year', 'Sp', 'LatDeg', 'LatMn', 'LatHem', 'LonDeg', 'LonMn', 'LonHem', 'Sum-Ex'])
    shlDf = pd.read_csv('SHL.csv', header=0, usecols=['Day', 'Mon', 'Year', 'Sp', 'LatDeg', 'LatMn', 'LatHem', 'LonDeg', 'LonMn', 'LonHem', 'Sum-Ex'])

    # format date-time in DD/MM/YYYY format
    # drop rows which have missing 'day' or 'month' values
    ioDf.rename(columns={'Mon': 'Month'}, inplace=True)
    ioDf.drop(ioDf[(ioDf['Day'] == 0) | (ioDf['Month'] == 0)].index, inplace=True)
    ioDates = pd.to_datetime(ioDf[['Day', 'Month', 'Year']], dayfirst=True, format="%d/%m/%Y")
    ioDf['Date'] = ioDates
    ioDf.drop(columns=['Day', 'Month', 'Year'], inplace=True)
    
    naDf.rename(columns={'Mon': 'Month'}, inplace=True)
    naDf.drop(naDf[(naDf['Day'] == 0) | (naDf['Month'] == 0)].index, inplace=True)
    naDates = pd.to_datetime(naDf[['Day', 'Month', 'Year']], dayfirst=True, format="%d/%m/%Y")
    naDf['Date'] = naDates
    naDf.drop(columns=['Day', 'Month', 'Year'], inplace=True)
    
    saDf.rename(columns={'Mon': 'Month'}, inplace=True)
    saDf.drop(saDf[(saDf['Day'] == 0) | (saDf['Month'] == 0)].index, inplace=True)
    saDates = pd.to_datetime(saDf[['Day', 'Month', 'Year']], dayfirst=True, format="%d/%m/%Y")
    saDf['Date'] = saDates
    saDf.drop(columns=['Day', 'Month', 'Year'], inplace=True)
    
    npDf.rename(columns={'Mon': 'Month'}, inplace=True)
    npDf.drop(npDf[(npDf['Day'] == 0) | (npDf['Month'] == 0)].index, inplace=True)
    npDates = pd.to_datetime(npDf[['Day', 'Month', 'Year']], dayfirst=True, format="%d/%m/%Y")
    npDf['Date'] = npDates
    npDf.drop(columns=['Day', 'Month', 'Year'], inplace=True)
    
    spDf.rename(columns={'Mon': 'Month'}, inplace=True)
    spDf.drop(spDf[(spDf['Day'] == 0) | (spDf['Month'] == 0)].index, inplace=True)
    spDates = pd.to_datetime(spDf[['Day', 'Month', 'Year']], dayfirst=True, format="%d/%m/%Y")
    spDf['Date'] = spDates
    spDf.drop(columns=['Day', 'Month', 'Year'], inplace=True)
    
    suDf.rename(columns={'Mon': 'Month'}, inplace=True)
    suDf.drop(suDf[(suDf['Day'] == 0) | (suDf['Month'] == 0)].index, inplace=True)
    suDates = pd.to_datetime(suDf[['Day', 'Month', 'Year']], dayfirst=True, format="%d/%m/%Y")
    suDf['Date'] = suDates
    suDf.drop(columns=['Day', 'Month', 'Year'], inplace=True)
    
    shp1Df.rename(columns={'Mon': 'Month'}, inplace=True)
    shp1Df.drop(shp1Df[(shp1Df['Day'] == 0) | (shp1Df['Month'] == 0)].index, inplace=True)
    shp1Dates = pd.to_datetime(shp1Df[['Day', 'Month', 'Year']], dayfirst=True, format="%d/%m/%Y")
    shp1Df['Date'] = shp1Dates
    shp1Df.drop(columns=['Day', 'Month', 'Year'], inplace=True)
    
    shp2Df.rename(columns={'Mon': 'Month'}, inplace=True)
    shp2Df.drop(shp2Df[(shp2Df['Day'] == 0) | (shp2Df['Month'] == 0)].index, inplace=True)
    shp2Dates = pd.to_datetime(shp2Df[['Day', 'Month', 'Year']], dayfirst=True, format="%d/%m/%Y")
    shp2Df['Date'] = shp2Dates
    shp2Df.drop(columns=['Day', 'Month', 'Year'], inplace=True)
    
    shlDf.rename(columns={'Mon': 'Month'}, inplace=True)
    shlDf.drop(shlDf[(shlDf['Day'] == 0) | (shlDf['Month'] == 0)].index, inplace=True)
    shlDates = pd.to_datetime(shlDf[['Day', 'Month', 'Year']], dayfirst=True, format="%d/%m/%Y")
    shlDf['Date'] = shlDates
    shlDf.drop(columns=['Day', 'Month', 'Year'], inplace=True)

    # get individual dataframes from xlsx sheets
    # drop unrequired rows, set columns and reset numbering
    areasDf = allCatchDf['Areas']
    areasDf.drop(columns=[7,8], inplace=True)
    areasDf.columns = ['Code', 'Ocean', 'Area', 'LatMin', 'LatMax', 'LonMin', 'LonMax']
    areasDf.drop(labels=[0,1], inplace=True)

    summaryDf = allCatchDf['DB7.1']
    summaryDf.rename(columns=summaryDf.iloc[0], inplace=True)
    summaryDf.drop(columns=['StartDate', 'StartMonth', 'StartYear', 'EndDate', 'EndMonth', 'EndYear', 'Oth', 'Dat', 'N', 'Qu', 'Ref', 'Notes','Lst', 'Wh.Oil',    'Sp.Oil', 'Tot.Oil', 'Do', 'O', 'Notes re oil'], inplace=True)
    summaryDf.rename(columns={'Oc': 'Ocean', 'Ex': 'ExpeditionCode', 'Land St. / Floating Factory': 'LandStation/FloatingFactory', 
    'TBlue': 'Blue', 'PBlue': 'PygmyBlue', 'Spm': 'Sperm', 'Hbk': 'Humpback', 'Bryd': 'Bryde', 'Mi:C': 'CommonMinke', 'Mi:A': 'AntarcticMinke', 'Bhd': 'Bowhead', 'Ri': 'Right', 'Unsp': 'Unspecified', 'Bot': 'Bottlenose', 'Ki': 'Killer', 'Pi': 'Pilot', 'BBk': "Baird'sBeaked", 'Dv': 'Dauhval',
    'Ty': 'OperationType', 'LS': 'NumLandStations', 'Fl': 'NumFloatingFactories', 'Cb': 'NumCatcherBoats'}, inplace=True)
    summaryDf.drop(labels=[0], inplace=True)

    expeditionDf = allCatchDf['Expeditions']
    expeditionDf.rename(columns=expeditionDf.iloc[1], inplace=True)
    expeditionDf.drop(columns=['Ar #', 'Nat #', 'P1 start', 'P1 end', 'P2 start', 'P2 end', 'P3 start', 'P3 end', 'Approx lat.', 'Approx long.', 'Approx wt.', 'NOTES            Tø = Tønnessen  cv.=converted  dism.=dismantled'], inplace=True)
    expeditionDf.drop(labels=[0,1], inplace=True)

    # sanity check
    # print('areasDf')
    # print(areasDf.head())
    # print('summaryDf')
    # print(summaryDf.head())
    # print('expeditionDf')
    # print(expeditionDf.head())
    # print('ioDf')
    # print(ioDf.head())
    # print('npDf')
    # print(npDf.head())
    # print('spDf')
    # print(spDf.head())
    # print('naDf')
    # print(naDf.head())
    # print('saDf')
    # print(saDf.head())
    # print('suDf')
    # print(suDf.head())
    # print('shp1Df')
    # print(shp1Df.head())
    # print('shp2')
    # print(shp2Df.head())
    # print('shl')
    # print(shlDf.head())

    # nodes and edges dataframe
    nodes = {
        '_nodeid': [],
        '_lat': [],
        '_lon': [],
        'land_station/floating_factory': [],
        'area': [],
        'area_max_lat': [],
        'area_min_lat': [],
        'area_max_lon': [],
        'area_min_lon': [],
        'ocean': [],
        'season': [],
        'date': [],
        'whale_species': [],
        'expedition_code': [],
        'expedition_nationality': [],
        'owning_company': [],
        'expedition_type': []
    }

    edges = {
        '_edgeid': [],
        '_srcid': [],
        '_dstid': [],
        '_weight': [],
        'expedition_code': [],
        'expedition_nationality': [],
        'owning_company': [],
        'expedition_type': []   # operation_type
    }

    # one-time joins
    expeditionDf = pd.merge(expeditionDf, areasDf, 'inner', 'Area', validate='many_to_one')
    # print('expeditionDf')
    # print(expeditionDf.head())

    # dict to track individual expedition data
    # timstamps and locations of first and last sighting for the expedition
    # and a running count of sightings while iterating through the records
    expDict = {}
    # set to keep track of the individual expedition codes
    expSet = set()

    nodeid = 0
    # populate the nodes and edges dataframes with data from the individual ocean dataframes
    individualDfs = [ioDf, npDf, spDf, naDf, saDf, suDf, shp1Df, shp2Df, shlDf]
    for idx, df in enumerate(individualDfs):
        print("starting dataframe", idx)
        for index, row in df.iterrows():
            expeditionCode = int(row['Sum-Ex'])
            expeditionRow = expeditionDf[expeditionDf['Ex. CODE'] == expeditionCode]
            summaryRow = summaryDf[summaryDf['ExpeditionCode'] == expeditionCode]

            nodes['_nodeid'].append(nodeid)
            nodeid += 1

            # location
            lat = f"{'-' if row['LatHem'] == 'S' else ''}{row['LatDeg']}.{row['LatMn']}"
            lon = f"{'-' if row['LonHem'] == 'W' else ''}{row['LonDeg']}.{row['LonMn']}"
            nodes['_lat'].append(float(lat))
            nodes['_lon'].append(float(lon))

            nodes['area'].append(expeditionRow['Area'].values[0])
            nodes['area_max_lat'].append(int(f"{'-' if expeditionRow['LatMax'].values[0][-1] == 'S' else ''}{expeditionRow['LatMax'].values[0][:-1]}"))
            nodes['area_min_lat'].append(int(f"{'-' if expeditionRow['LatMin'].values[0][-1] == 'S' else ''}{expeditionRow['LatMin'].values[0][:-1]}"))
            nodes['area_max_lon'].append(int(f"{'-' if expeditionRow['LonMax'].values[0][-1] == 'W' else ''}{expeditionRow['LonMax'].values[0][:-1]}"))
            nodes['area_min_lon'].append(int(f"{'-' if expeditionRow['LonMin'].values[0][-1] == 'W' else ''}{expeditionRow['LonMin'].values[0][:-1]}"))
            nodes['ocean'].append(oceansDict[expeditionRow['Ocean'].values[0]])

            # expedition details
            nodes['expedition_code'].append(expeditionCode)
            countryCode = expeditionRow['Nation'].values[0]
            nodes['expedition_nationality'].append(countriesDict[countryCode] if countryCode in countriesDict else 'NA')
            
            lsff = expeditionRow['Land Station / F.Factory'].values[0]
            nodes['land_station/floating_factory'].append(lsff)
            nodes['owning_company'].append(expeditionRow['COMPANY'].values[0])

            expeditionType = summaryRow['OperationType'].values[0]
            nodes['expedition_type'].append(expeditionTypesDict[expeditionType] if expeditionType in expeditionTypesDict else 'NA')
            
            nodes['season'].append(int(summaryRow['Year'].values[0]))
            nodes['date'].append(row['Date'])
            nodes['whale_species'].append(whaleSpeciesDict[row['Sp']])
            
            expSet.add(expeditionCode)
            """
            # dict - first sighting timestamp, first sighting location, last sighting timestamp, last sighting location, sightings
            if expeditionCode not in expDict:
                expDict[expeditionCode] = {
                                            'fts': row['Date'] + dt.timedelta(days=-1), 
                                            'flt': lat, 
                                            'fln': lon,
                                            'lts': row['Date'] + dt.timedelta(days=1),
                                            'llt': lat,
                                            'lln': lon,
                                            'sightings': {
                                                whaleSpeciesDict[row['Sp']]: 1,
                                                'total': 1
                                            }
                }
            else:
                oldDict = expDict[expeditionCode]
                newDict = {
                            'fts': oldDict['fts'] if row['Date'] + dt.timedelta(days=-1) >= oldDict['fts'] else row['Date'] + dt.timedelta(days=-1),
                            'flt': oldDict['flt'] if row['Date'] + dt.timedelta(days=-1) >= oldDict['fts'] else lat,
                            'fln': oldDict['fln'] if row['Date'] + dt.timedelta(days=-1) >= oldDict['fts'] else lon,
                            
                            'lts': oldDict['lts'] if row['Date'] + dt.timedelta(days=1) <= oldDict['lts'] else row['Date'] + dt.timedelta(days=1),
                            'llt': oldDict['llt'] if row['Date'] + dt.timedelta(days=1) <= oldDict['lts'] else lat,
                            'lln': oldDict['lln'] if row['Date'] + dt.timedelta(days=1) <= oldDict['lts'] else lon
                }

                if whaleSpeciesDict[row['Sp']] in oldDict['sightings']:
                    newDict['sightings'] = {
                        whaleSpeciesDict[row['Sp']]: oldDict['sightings'][whaleSpeciesDict[row['Sp']]] + 1,
                        'total': oldDict['sightings']['total'] + 1
                    }
                else:
                    newDict['sightings'] = {
                        whaleSpeciesDict[row['Sp']]: 1,
                        'total': oldDict['sightings']['total'] + 1
                    }
                    # append whale species sightings from oldDict to newDict, which are missing in newDict
                    for species in oldDict['sightings']:
                        if species == 'total':  continue
                        newDict['sightings'][species] = oldDict['sightings'][species]

                expDict[expeditionCode] = newDict
            """

    print("Number of whale sightings across individual files:", nodeid)

    """
    numSightingsMissingFromIndividualFiles = 0
    # add dummy start and end nodes to denote expedition start and end
    # use appropriate whale species ID for these nodes: -1 for start and -2 for end
    for expCode in expDict:
        expeditionRow = expeditionDf[expeditionDf['Ex. CODE'] == expCode]
        summaryRow = summaryDf[summaryDf['ExpeditionCode'] == expCode]
            
        # start dummy node
        nodes['_nodeid'].append(nodeid)
        nodeid += 1

        # location
        nodes['_lat'].append(expDict[expCode]['flt'])
        nodes['_lon'].append(expDict[expCode]['fln'])

        nodes['area'].append(expeditionRow['Area'].values[0])
        nodes['area_max_lat'].append(int(f"{'-' if expeditionRow['LatMax'].values[0][-1] == 'S' else ''}{expeditionRow['LatMax'].values[0][:-1]}"))
        nodes['area_min_lat'].append(int(f"{'-' if expeditionRow['LatMin'].values[0][-1] == 'S' else ''}{expeditionRow['LatMin'].values[0][:-1]}"))
        nodes['area_max_lon'].append(int(f"{'-' if expeditionRow['LonMax'].values[0][-1] == 'W' else ''}{expeditionRow['LonMax'].values[0][:-1]}"))
        nodes['area_min_lon'].append(int(f"{'-' if expeditionRow['LonMin'].values[0][-1] == 'W' else ''}{expeditionRow['LonMin'].values[0][:-1]}"))
        nodes['ocean'].append(oceansDict[expeditionRow['Ocean'].values[0]])
            
        # expedition details
        nodes['expedition_code'].append(expeditionCode)
        nodes['expedition_nationality'].append(expeditionRow['Nation'].values[0])
        
        lsff = expeditionRow['Land Station / F.Factory'].values[0]
        nodes['land_station/floating_factory'].append(lsff)
        nodes['owning_company'].append(expeditionRow['COMPANY'].values[0])

        expeditionType = summaryRow['OperationType'].values[0]
        nodes['expedition_type'].append(expeditionTypesDict[expeditionType] if expeditionType in expeditionTypesDict else 'NA')
        
        nodes['season'].append(summaryDf['Year'])
        nodes['date'].append(expDict[expCode]['fts'])
        nodes['whale_species'].append(-1)

        # end dummy node
        nodes['_nodeid'].append(nodeid)
        nodeid += 1

        # location
        nodes['_lat'].append(expDict[expCode]['llt'])
        nodes['_lon'].append(expDict[expCode]['lln'])

        nodes['area'].append(expeditionRow['Area'].values[0])
        nodes['area_max_lat'].append(int(f"{'-' if expeditionRow['LatMax'].values[0][-1] == 'S' else ''}{expeditionRow['LatMax'].values[0][:-1]}"))
        nodes['area_min_lat'].append(int(f"{'-' if expeditionRow['LatMin'].values[0][-1] == 'S' else ''}{expeditionRow['LatMin'].values[0][:-1]}"))
        nodes['area_max_lon'].append(int(f"{'-' if expeditionRow['LonMax'].values[0][-1] == 'W' else ''}{expeditionRow['LonMax'].values[0][:-1]}"))
        nodes['area_min_lon'].append(int(f"{'-' if expeditionRow['LonMin'].values[0][-1] == 'W' else ''}{expeditionRow['LonMin'].values[0][:-1]}"))
        nodes['ocean'].append(oceansDict[expeditionRow['Ocean'].values[0]])

        # expedition details
        nodes['expedition_code'].append(expeditionCode)
        nodes['expedition_nationality'].append(expeditionRow['Nation'].values[0])
        
        lsff = expeditionRow['Land Station / F.Factory'].values[0]
        nodes['land_station/floating_factory'].append(lsff)
        nodes['owning_company'].append(expeditionRow['COMPANY'].values[0])

        expeditionType = summaryRow['OperationType'].values[0]
        nodes['expedition_type'].append(expeditionTypesDict[expeditionType] if expeditionType in expeditionTypesDict else 'NA')
        
        nodes['season'].append(summaryDf['Year'])
        nodes['date'].append(expDict[expCode]['lts'])
        nodes['whale_species'].append(-2)
    """

        # Trevor had said that the summary file has more records than the individual files
        # He said not to worry about assigning timestamp and locations to the extra sightings data in the summary files
        # TODO: Uncomment the following code later
    """
        numAdditionalRecords = summaryRow['Total'] - expDict[expCode][6]
        numSightingsMissingFromIndividualFiles += numAdditionalRecords
        
        for species in expDict[expCode]['sightings']:
            if species == 'total':  continue

            for count in range(expDict[expCode]['sightings'][species]):
                # create node for the species
                # start dummy node
                nodes['_nodeid'].append(nodeid)
                nodeid += 1

                # location - do not assume anything
                nodes['_lat'].append(None)
                nodes['_lon'].append(None)

                nodes['area'].append(expeditionRow['Area'].values[0])
                nodes['area_max_lat'].append(int(f"{'-' if expeditionRow['LatMax'].values[0][-1] == 'S' else ''}{expeditionRow['LatMax'].values[0][:-1]}"))
                nodes['area_min_lat'].append(int(f"{'-' if expeditionRow['LatMin'].values[0][-1] == 'S' else ''}{expeditionRow['LatMin'].values[0][:-1]}"))
                nodes['area_max_lon'].append(int(f"{'-' if expeditionRow['LonMax'].values[0][-1] == 'W' else ''}{expeditionRow['LonMax'].values[0][:-1]}"))
                nodes['area_min_lon'].append(int(f"{'-' if expeditionRow['LonMin'].values[0][-1] == 'W' else ''}{expeditionRow['LonMin'].values[0][:-1]}"))
                nodes['ocean'].append(oceansDict[expeditionRow['Ocean'].values[0]])
                    
                # expedition details
                nodes['expedition_code'].append(expeditionCode)
                nodes['expedition_nationality'].append(expeditionRow['Nation'].values[0])
                
                lsff = expeditionRow['Land Station / F.Factory'].values[0]
                nodes['land_station/floating_factory'].append(lsff)
                nodes['owning_company'].append(expeditionRow['COMPANY'].values[0])

                expeditionType = summaryRow['OperationType'].values[0]
                nodes['expedition_type'].append(expeditionTypesDict[expeditionType] if expeditionType in expeditionTypesDict else 'NA')
                
                nodes['season'].append(summaryDf['Year'])
                nodes['date'].append(None)    # do not assume anything
                nodes['whale_species'].append(species)
    """
    nodesDf = pd.DataFrame(data=nodes)

    # create edges between nodes
    # these edges will be between whale sighting nodes.
    # same expeditions, i.e. having the same exp code and the same expedition details sight whales in different regions
    # edges will be created between each consecutive catch in time happening at different locations
    edgeid = 0

    # sort them wrt expedition code and date of sighting to get the chronological sequence for each expedition
    nodesDf.sort_values(by=['expedition_code', 'date'])

    with open('graphNodesData.csv', 'w') as g:
        nodesDf.to_csv(path_or_buf=g, index=False, encoding='utf-8', date_format="%Y-%m-%d")
        g.close()

    # create edges between each such consecutive pair of sightings for the same expedition, which are not at the same geo location
    prevRow = nodesDf.iloc[[0]]
    for idx, row in nodesDf.iterrows():
        if row['expedition_code'] == prevRow['expedition_code'].values[0]:
            if row['_lat'] != prevRow['_lat'].values[0] or row['_lon'] != prevRow['_lon'].values[0]:
                edges['_edgeid'].append(edgeid)
                edgeid += 1

                # these will be directed edges
                edges['_srcid'].append(prevRow['_nodeid'].values[0])
                edges['_dstid'].append(row['_nodeid'])

                edges['_weight'].append(1)

                edges['expedition_code'].append(row['expedition_code'])
                edges['expedition_nationality'].append(row['expedition_nationality'])
                edges['owning_company'].append(row['owning_company'])
                edges['expedition_type'].append(row['expedition_type'])

        prevRow = nodesDf.iloc[[idx]]

    edgesDf = pd.DataFrame(data=edges)

    with open('graphEdgesData.csv', 'w') as g:
        edgesDf.to_csv(path_or_buf=g, index=False, encoding='utf-8')
        g.close()

    print('Number of routes taken by expeditions overall:', edgeid)
    print('Took', (time.clock_gettime(0) - start), ' sec')