# Application

require 'sinatra'
require 'find'

##
# Método Responsável para acessar os caminhos dos diretórios HTML
# Utilizando um método find padrão para definir o parâmetro path.

def get_files(path)
	files = []
	Find.find(path) do |c|
		files << File.basename(c, ".erb") if !File.directory?(c)
	end
	return
end

##
# Métodos responsáveis para acessar as páginas na web.
# São as rotas do Software, responsáveis pelo redirecionamento.

get '/' do
	@views = get_files('./views')
	erb :home
end

get '/redefinir' do
	@views = get_files('./views')
	erb :redefinir
end

get '/cadastros' do
	@views = get_files('./views')
	erb :cadastros
end

get '/login' do
	@views = get_files('./views')
	erb :login
end

get '/jogo' do
	@views = get_files('./views')
	erb :jogo
end

get '/fases' do
	@views = get_files('./views')
	erb :fases
end

get '/menu' do
	@views = get_files('./views')
	erb :menu
end

get '/configuracoes' do
	@views = get_files('./views')
	erb :configuracoes
end

get '/creditos' do
	@views = get_files('./views')
	erb :creditos
end

get '/licenca' do
	@views = get_files('./views')
	erb :licenca
end

get '/perfil' do
	@views = get_files('./views')
	erb :perfil
end

get '/lideres' do
	@views = get_files('./views')
	erb :lideres
end

## Fases

get '/n1' do
	@views = get_files('./views')
	erb :n1
end

get '/n2' do
	@views = get_files('./views')
	erb :n2
end

get '/n3' do
	@views = get_files('./views')
	erb :n3
end

get '/n4' do
	@views = get_files('./views')
	erb :n4
end

get '/n5' do
	@views = get_files('./views')
	erb :n5
end

get '/n6' do
	@views = get_files('./views')
	erb :n6
end

get '/n7' do
	@views = get_files('./views')
	erb :n7
end

get '/n8' do
	@views = get_files('./views')
	erb :n8
end

get '/n9' do
	@views = get_files('./views')
	erb :n9
end

get '/n10' do
	@views = get_files('./views')
	erb :n10
end