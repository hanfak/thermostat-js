require 'data_mapper'
require 'dm-postgres-adapter'
require 'dm-migrations'



class Thermostat
  include DataMapper::Resource

    property :id, Serial
    property :degrees, String

end


DataMapper.setup(:default,"postgres://localhost/thermostat_development")
DataMapper.finalize
DataMapper.auto_upgrade!