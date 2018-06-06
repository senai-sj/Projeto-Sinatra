class Ranking
	include MongoMapper::Document

	key :nome, String, :required => true
	key :pontos, Integer, :required => true
	key :rank, Integer, :required => true

	timestamps!
end