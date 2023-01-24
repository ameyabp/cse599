-- node table creation
create table whale_nodes(_nodeid int, _lat float, _lon float, land_station_floating_factory text, area text, ocean text, date int, whale_species text, expedition_code int, expedition_nationality text, owning_company text, expedition_type text);
\copy whale_nodes(_nodeid,_lat,_lon,land_station_floating_factory,area,ocean,date,whale_species,expedition_code,expedition_nationality,owning_company,expedition_type) from /home/ameyap2/Documents/cse599/data/graphNodesData.csv delimiter ',' csv header;        -- takes care of date format itself!
-- alter table whale_nodes add column _x float, add column _y float, add column pt point;

-- applying mercator projection
-- update whale_nodes set _x = _lon+180, _y = 180*ln(tan(pi()/360 * (90 + _lat)));
-- update whale_nodes set pt=point(_x, _y);

-- create indexes
-- alter table whale_nodes add constraint nodeid_pkey primary key(_nodeid);
-- create index sp_whale_nodes on whale_nodes using gist(pt);

-- edge table creation
-- create table whale_edges(_edgeid int, _srcid int, _dstid int, _weight float, expedition_code int, expedition_nationality text, owning_company text, expedition_type text);
-- \copy whale_edges(_edgeid,_srcid,_dstid,_weight,expedition_code,expedition_nationality,owning_company,expedition_type) from /home/ameyap2/Documents/cse599/data/graphEdgesData.csv delimiter ',' csv header;
-- alter table whale_edges add column _x1 float, add column _y1 float, add column _x2 float, add column _y2 float, add column pt1 point, add column pt2 point;
-- update whale_edges set _x1 = _x, _y1 = _y from (select _nodeid, _x, _y from whale_nodes) as nodes where nodes._nodeid = _srcid;
-- update whale_edges set _x2 = _x, _y2 = _y from (select _nodeid, _x, _y from whale_nodes) as nodes where nodes._nodeid = _dstid;
-- update whale_edges set pt1 = point(_x1, _y1), pt2=point(_x2, _y2);

-- create indexes
-- alter table whale_edges add constraint edgeid_pkey primary key(_edgeid);
-- create index idx_srcid on whale_edges(_srcid);
-- create index idx_dstid on whale_edges(_dstid);
-- create index sp_whale_edges_1 on whale_edges using gist(pt1);
-- create index sp_whale_edges_2 on whale_edges using gist(pt2);

-- table stats
-- SELECT pg_size_pretty( pg_table_size('whale_nodes') );
-- SELECT pg_size_pretty( pg_indexes_size('whale_nodes') );
-- SELECT pg_size_pretty( pg_total_relation_size('whale_nodes') );

-- SELECT pg_size_pretty( pg_table_size('whale_edges') );
-- SELECT pg_size_pretty( pg_indexes_size('whale_edges') );
-- SELECT pg_size_pretty( pg_total_relation_size('whale_edges') );

-- queries
-- select * from whale_nodes where pt <@ box'(bl),(tr)'
-- select * from whale_nodes where pt <@ box'(),()'