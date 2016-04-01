require 'sinatra'
require 'json'

class Themostat < Sinatra::Base
  enable :sessions

  get '/' do
    headers 'Access-Control-Allow-Origin' => '*'
    erb(:index)
  end

  post '/temperature' do
    p session[:temperature] = params[:temperature]
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    { temperature: session[:temperature] }.to_json
  end

  run! if app_file == $0
end
