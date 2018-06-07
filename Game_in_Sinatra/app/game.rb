# Application

require 'sinatra'
require 'find'

def get_files(path)
	files = []
	Find.find(path) do |c|
		files << File.basename(c, ".erb") if !File.directory?(c)
	end
	return
end

get '/' do
	@views = get_files('./views')
	erb :home
end

get '/index' do
	@views = get_files('./views')
	erb :index
end

get '/cadastros' do
	@views = get_files('./views')
	erb :cadastros
end

get '/http' do
	@views = get_files('./views')
	erb :http
end

get '/frameworks' do
	@views = get_files('./views')
	erb :frameworks
end

get '/git' do
	@views = get_files('./views')
	erb :git
end